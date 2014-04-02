Javascript Review
=================

You can write a JavaScript function like this:
```js
function() {
	console.log('goodbye world I am dieing!');
}
```

This is known as an anonymous function can only be called
in place by putting wierd looking parathesis around it like so:

```js
(function() {
	console.log('goodbye world I am dieing!');
})();
```

OR the better way to write a JavaScript function would be to
give it a name like:
```js
function myFunction() {
	console.log('goodbye world I am dieing!');
}

myFunction(); // easier way to call myFunction
```

We can also assign the function to a variableName like so:
```js
var myFunction = function () {
	console.log('goodbye world I am dieing!');
}

var myFunctionAsVariable = myFunction;

// and still can be called by typing
myFunction(); // OR
myFunctionAsVariable();
```