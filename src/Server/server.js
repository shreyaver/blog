const Hapi = require('hapi');

const server = new Hapi.Server({
  port: 8080,
  host: 'localhost',
});

server.route([{
    method: 'POST',
    path: '/post',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
      }
    },
    handler: async (request, h) => {
      const serverResponse = JSON.stringify(request.payload);
      return h.response(`Received: ${serverResponse}`);
    },
  },
  {
    method: 'GET',
    path: '/ping',
    handler: async (request, h) => "pong"
  },
]);

if(!module.parent) {
  server.start();
}
module.exports = {
  server,
};