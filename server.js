const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: './build',
});

server.use(middlewares);

const { users } = require('./db.json');

server.get('/users', async (req, res) => {
  const isQuery = !!Object.keys(req.query).length;
  if (isQuery) {
    const userInfo = await users.find((e) => {
      return e.id === req.query.id && e.password === req.query.password;
    });
    res.send({ ...userInfo });
  } else {
    res.send(users);
  }
});

const { messages } = require('./db.json');

server.get('/messages', (req, res) => {
  res.send(messages);
});

server.post('/messages', (req, res) => {
  const { userId, userName, profileImage, content, date } = req.body;
  messages.push({ userId, userName, profileImage, content, date });
  res.send(messages);
});

server.listen(4000, () => {
  console.log('server is running');
});
