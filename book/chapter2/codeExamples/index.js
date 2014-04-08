var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {}
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

// Instead of passing the router object JUST pass the 
// router object's route function. This is the core of 
// functional programming.
server.start(router.route, handle);

// In JavaScript, objects are just collections of name/value
// pairs - think of a JavaScript object as a dictionary with
// string keys. The values can be strings, numbers, & FUNCTIONS!