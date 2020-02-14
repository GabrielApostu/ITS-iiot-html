"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
const cors = require("fastify-cors");
var app = fastify({ logger: true });
app.register(cors);
// app.register(cors, {
//     origin : "localhost:5000",
//     methods: "GET,POST"
// });
app.register(require("./categories"), { prefix: '/api/categories' });
var list = [];
app.get('/', (request, reply) => {
    reply.send("Ciao ITS");
});
app.get('/api/products', (request, reply) => {
    list.push(new Product(1, 'Prodotto 1'));
    list.push(new Product(2, 'Prodotto 2'));
    reply.send(list);
});
app.get('/api/products/:id', (request, reply) => {
    let productId = request.params.id;
    //reply.status(404).send();
    reply.send(new Product(productId, 'Prodotto ' + productId));
});
app.post('/api/products', (request, reply) => {
    let product = request.body;
    list.push(product);
    reply.send({
        result: true,
        productId: product.id,
        productName: product.name
    });
});
app.listen(3000, (err, address) => {
    if (err)
        throw err;
    app.log.info(`server listening on ${address}`);
});
class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
