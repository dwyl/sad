var Hapi    = require('hapi');
var port    = process.env.PORT || 1337; // define PORT env var or use 1337
var server  = new Hapi.Server();

server.connection({ port: port });

server.register([ { register: require('../lib') } ], function (err) {

  server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
          reply('Hello!');
      }
  });

});

server.start(function(){
  console.log('Now Visit: http://localhost:'+port);
});

module.exports = server;
