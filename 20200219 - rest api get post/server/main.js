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
    if (!item.author) {
        reply.status(400).send({ error: "Campo 'author' obbligatorio" });
        return;
    }
    if (!item.description) {
        reply.status(400).send({ error: "Campo 'description' obbligatorio" });
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
