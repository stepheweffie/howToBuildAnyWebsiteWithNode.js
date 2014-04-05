Modules and NPM
===============

If you go to https://www.npmjs.org/ you will find all of the
popular JavaScript modules and how to install them by typing:

```sh
prompt> npm install module_name_here # wait, what is 'npm'?
```

NPM(Node Package Manager) is automatically installed when you installed Node earilier. NPM is for installing other people's JavaScript modules for you to use in your code!!!

NPM has 2 different ways of working:

1. local(default) = Node modules are installed & stored in a local folder called "node_modules". 
2. global = All Node modules are installed inside a shared folder and you keep only 1 version of each module. To install a Node module globally use the '-g' switch. Usually people only use this for install modules used for testing.

<h2>What's the package.json file for?</h2>
This file tells users a lot of the important imformation about
a module and should be saved at the main folder of the module.

An example package.json file may look a little like this:
```js
{
	"name": "myModule",
	"version": 0.0.1,
	"dependencies": { 
		"express": "*", // '*' means any version of the module express is fine
		"request": "2.27.0", // a specific module version is required
		"async": "0.2.x" // where x can be any digit
	}
}
```

NOTE: It's common practise to depend on a specific major and 
minor version and not specify the path version since path versions should only solve issues.