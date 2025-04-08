// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json'); // Tu archivo de rutas personalizado

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running at http://localhost:3000');
});