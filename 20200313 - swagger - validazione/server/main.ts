import * as fastify from 'fastify'
import * as cors from 'fastify-cors'
import * as swagger from 'fastify-swagger'
import * as staticFile from 'fastify-static'
import path = require('path');

var app = fastify({logger: true});
app.register(cors);
app.register(swagger, {
    routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
})

var list: ToDoItem[] = [];

app.get("/items", (request, reply) => {
    reply.send(list);
});

app.get("/items/:author", { 
    schema: {
        params: {
            author: { type: 'string', minLength: 3 }
        }
} },(request, reply) => {
    var temp: ToDoItem[] = [];
    list.forEach(item => {
        if(item.author.toLowerCase() == request.params.author.toLowerCase())
            temp.push(item);
    });

    reply.send(temp);
});



const bodyItemJsonSchema = {
    type: 'object',
    required: ['author', 'description'],
    properties: {
        author: { type: 'string', minLength: 2 },
        description: { type: 'string' },
        status: { type: 'string' },
        creationDate: { type: 'number' },
    }
  }
  

app.post("/items", { schema: { body : bodyItemJsonSchema} } ,(request, reply) => {
    var item = request.body as ToDoItem;

    list.push(item);
    reply.status(204).send();
});


app.register(staticFile, {
    root: path.join(__dirname, '../client'),
    prefix: '/app/', // optional: default '/'
});

app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });

class ToDoItem{
    author: string;
    description: string;
    status: string;
    creationDate: number;
}
