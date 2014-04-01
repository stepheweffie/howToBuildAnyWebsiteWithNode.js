Chapter 1: Why Node.js?
=======================

This book assumes you know basic Javascript syntax & about 2 
months of programming experience in any language. If you don't 
meet either of these assumptions I highly recommend doing a 
few exercises from codeacademy 
[here](http://www.codecademy.com/tracks/javascript).

<h2>Why use Node.js?</h2>

<h3>Reason 1: Allow you to write non-blocking code</h3>
Here is an example of blocking code that you might write everyday:

```js
var post = database.query('SELECT * FROM posts WHERE id = 1');
// Code on this line cannot execute until the line above 
// completes however long it takes! This is why it is
// called blocking I/O!!!
// In your browser this is where you see the loading buffer 
// that is very annoying!!!

// doSomethingWithPost(post);
// other code...
```

Writing blocking I/O code is <b>BAD</b> for web development 
becuase we could be doing other stuff while the database 
query is taking forever!!!!

<h4>Solution: Use event callbacks</h4>

An event callback is a function that gets invoked when something 
significant happens. Let's use it for the previous example:

```js
// let's first write the callback function we will use
callbackFunction = function(post) {
	doSomethingWithPost(post); // this line of code will only execute after database.query function returns
};

database.query('SELECT * FROM posts WHERE id = 1', callbackFunction); 

// doSomethingWithPost(post); // this will execute immediately now instead of after the database.query(...) is done
// other code...
```

You might be wondering how is the above <b>non-blocking</b> 
code is  even possible?! Well, the <b>event loop</b> is a 
software pattern that allows for non-blocking I/O code to be written. 
You should know that there are other event loop implementations for 
other popular languages like Ruby, Perl, and Python. However, the 
event loop implementation was added after many libraries where 
created for each of those languages & thus many libraries are 
off limits to make your app non-blocking.

However, Node.js was decided to be a non-blocking from day ONE!
Javascript is very minimal of a language and the "correct" way 
for doing input output operations hasn't been standarized like 
it has in C, Ruby, and Python.

<h3>Reason 2: Javascript!</h3>