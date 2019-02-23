const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/test', function (req, res) {
  res.send('Test page');
});

const server = app.listen(port, '127.0.0.1',() => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});