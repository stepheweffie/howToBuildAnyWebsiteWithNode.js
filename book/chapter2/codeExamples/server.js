var http = require("http");

// This creates a HTTP server with a callback function that is called for 
// each request.
http.createServer(function(request, response) {
  // In the callback function we create a response with status code 200
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  // specifies which port and IP address the server runs on
}).listen(process.env.PORT, process.env.IP); 