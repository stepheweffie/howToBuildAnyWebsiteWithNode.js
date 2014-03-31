Chapter 1: Why Node.js?
=======================

This book you know basic Javascript syntax. If you don't know Javascript I highly recommend 
doing a few exercises from codeacademy [here](http://www.codecademy.com/tracks/javascript).

<h2>Why use Node.js?</h2>

Here is an javascript example of blocking I/O code that you might code everyday:

```js
var post = database.query('SELECT * FROM posts WHERE id = 1');
// Code on this line cannot execute until the line above completes however long it takes! This is called blocking!!!
// In your browser this is where you see the loading buffer that is very annoying!!!

// doSomethingWithPost(post);
// other code...
```

Writing blocking I/O code is <b>BAD</b> for web development becuase we could be doing other stuff while
the database query is taking forever!!!!

<h3>Solution: Use event callbacks</h3>

An event callback is a function that gets invoked when something significant happens. Let's use it for the previous example:

```js
// let's first write the callback function we will use
callbackFunction = function(post) {
	doSomethingWithPost(post); // this line of code will only execute after database.query function returns
};

database.query('SELECT * FROM posts WHERE id = 1', callbackFunction);

// doSomethingWithPost(post); // this will execute immediately now instead of after the database.query(...) is done
// other code...
```