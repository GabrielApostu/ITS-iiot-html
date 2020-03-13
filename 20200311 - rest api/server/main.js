"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
const cors = require("fastify-cors");
var app = fastify({ logger: true });
app.register(cors);
var list = [];
app.get("/items", (request, reply) => {
    reply.send(list);
});
app.get("/items/:author", (request, reply) => {
    var temp = [];
    list.forEach(item => {
        if (item.author.toLowerCase() == request.params.author.toLowerCase())
            temp.push(item);
    });
    reply.send(temp);
});
app.post("/items", (request, reply) => {
    var item = request.body;
    var errors = [];
    if (!item.author) {
        errors.push("Campo 'author' obbligatorio");
    }
    if (item.author.length < 3) {
        errors.push("Campo 'author' deve essere lungo almeno 3 caratteri");
    }
    if (!item.description) {
        errors.push("Campo 'description' obbligatorio");
    }
    if (errors.length > 0) {
        reply.status(400).send({ errors: errors });
        return;
    }
    list.push(item);
    reply.status(204).send();
});
app.listen(3000, (err, address) => {
    if (err)
        throw err;
    app.log.info(`server listening on ${address}`);
});
class ToDoItem {
}
