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

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for ' + pathname + ' received');
		
		var postData = "";
		request.setEncoding("utf8");

		// In my opinion, it's an HTTP servers job to give the
		// application all the data from a requests it needs to
		// do its job. Therefore, I suggest we handle the POST
		// data processing right in the server and pass the
		// final data on to the router and then the request
		// handlers, which then can decide what to do with it.

		// put all the data and end event callbacks in the
		// server, collecting all POST data chunks in the
		// data callback, and calling the router upon
		// receiving the end event, which passes the collected
		// data chunks on to the router, which in turn passes
		// it on to the request handlers

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		request.addListener("end", function() {
			// the call to route(...) is in the "end" event
			// callback to make sure it's only called when
			// all POST data is gathered
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;