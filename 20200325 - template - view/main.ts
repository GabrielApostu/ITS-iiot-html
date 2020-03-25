import * as fastify from 'fastify'
import * as staticFile from 'fastify-static'
import * as pointOfView from 'point-of-view'
import path = require('path');

var app = fastify({logger: true});

app.register(pointOfView, {
  engine: {
    ejs: require('ejs')
  }
});

// app.register(staticFile, {
//     root: path.join(__dirname, '/css'),
//     prefix: '/css/',
// });

// gestione cartella css
app.register((instance, opts, next) => {
  instance.register(staticFile, {
    root: path.join(__dirname, 'css'),
    prefix: '/css/'
  })
  next();
});

// gestione cartella js
app.register((instance, opts, next) => {
  instance.register(staticFile, {
    root: path.join(__dirname, 'js'),
    prefix: '/js/'
  });
  next();
});

app.get('/', (req, reply) => {
  let user = {
    firstName: 'Andrea',
    lastName: 'Dottor',
    list: ['red', 'blue', 'green']
  };
  reply.view('/templates/index.ejs', user);
});

app.get('/items/:id', (req, reply) => {
  let id = req.params.id;
  let item = {
    id: id,
    title: 'elemento con id ' + id
  };
  reply.view('/templates/details.ejs', item);
});




app.listen(3000, (err, address) => {
    if (err) throw err
    app.log.info(`server listening on ${address}`)
  });

