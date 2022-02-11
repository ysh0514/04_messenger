const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const port = process.env.PORT || 4000;

server.use(router);
server.get('/', (req, res) => {
  res.send({ hi: 'hi', a: req.query });
});

server.listen(port, () => {
  console.log('server is running');
});
