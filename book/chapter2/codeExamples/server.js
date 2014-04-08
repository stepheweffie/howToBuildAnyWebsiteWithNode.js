var http = require("http");
// Somewhere within Node.js lives a module called "http" and we can make use
// of it in our code by requiring it and assigning the result of the require
// to a local variable. This makes our variable an object that carries all
// the public methods the http module provides.

var url = require("url");
//                               url.parse(string).query
//                                           |
//           url.parse(string).pathname      |
//                       |                   |
//                       |                   |
//                      ------ -------------------
//http://www.example.com/start?foo=bar&hello=world
//                                 ---       -----
//                                  |          |
//                                  |          |
//               querystring(string)["foo"]    |
//                                             |
//                          querystring(string)["hello"]

function start(route) {
    function onRequestFunction(request, response) {
      var pathname = url.parse(request.url).pathname;  
      console.log("Request for " + pathname + " received.");
      
      route(pathname);
        
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World!!!");
      response.end();
    }
    
    // This creates a HTTP server with a callback function that is called for 
    // each request.
    http.createServer(onRequestFunction).listen(process.env.PORT, process.env.IP); 
    // process.env.PORT and process.env.IP specifies which port and IP address 
    // the server runs on
    console.log("HTTP web server has started!")
}

exports.start = start;