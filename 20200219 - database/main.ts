import * as fastify from 'fastify'
import * as cors from 'fastify-cors'
import * as mysql from 'mysql'

var connection = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

var app = fastify({logger: true});
app.register(cors);

app.get("/students", (request, reply) => {
    connection.query("select firstname, lastname, class  from students", (error, results, fields)=>{
        app.log.info(results);
        app.log.info(fields);
        
        if(error){
            reply.status(500).send({error: error.message});
            return;
        }

        reply.send(results);
    });
});

app.post("/students", (request, reply) => {
    let student = request.body;
    connection.query("INSERT INTO students SET ?", student, (error, results, fields)=>{      
        if(error){
            reply.status(500).send({error: error.message});
            return;
        }
        reply.status(204).send();
    });
});



app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });
