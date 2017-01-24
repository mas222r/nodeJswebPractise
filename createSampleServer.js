var http = require('http');
http.createServer(function (request,response) {
response.writeHead(200,{'Content-Type': 'text/plain'});
response.end('My first nodejs server create\n');
}).listen(1338,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1338/');