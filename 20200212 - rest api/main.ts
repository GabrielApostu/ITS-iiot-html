import * as fastify from 'fastify';
import * as cors from 'fastify-cors'

var app = fastify({logger: true});
app.register(cors);
// app.register(cors, {
//     origin : "localhost:5000",
//     methods: "GET,POST"
// });

app.get('/', (request, reply )=> {
    reply.send("Ciao ITS");
});

app.get('/api/products', (request, reply) => {
    let list: Product[]= [];
    list.push(new Product(1, 'Prodotto 1'));
    list.push(new Product(2, 'Prodotto 2'));
    reply.send(list);
});

app.get('/api/products/:id', (request, reply) =>{
    let productId = request.params.id;
    reply.send(new Product(productId, 'Prodotto ' + productId));
});

app.post('/api/products', (request, reply) => {
    let product = request.body as Product;

    reply.send({ 
        result: true, 
        productId : product.id,
        productName: product.name
    });
});

app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });


  class Product{
      constructor(
            public id:number, 
            public name: string){
      }
  }