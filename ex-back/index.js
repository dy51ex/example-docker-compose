const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

console.log('back listen compose internal port: 80')

const server = http.createServer(requestListener);
server.listen(80);