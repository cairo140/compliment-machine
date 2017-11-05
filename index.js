const http = require('http');

const PORT = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('You are great!');
};

const server = http.createServer(requestHandler);
server.listen(PORT, (err) => console.log);
console.log(`Listening on :${PORT}`);
