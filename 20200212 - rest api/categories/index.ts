import { FastifyInstance } from "fastify";

module.exports = (server: FastifyInstance, opts, next) => {

    server.get('/', async (request, reply) => {
      return { hello: 'world' }
    })

    next();
};