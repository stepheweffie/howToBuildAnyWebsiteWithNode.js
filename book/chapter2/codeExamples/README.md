Running a HTTP web server
=========================
<h2>How to use code:</h2>
1. Navigate to this folder through the command line by typing

```sh
prompt> cd filename_you_want_to_go_inside
```
OR
```sh
prompt> cd .. # go back to the previous folder you were in if you go inside
              # the wrong folder
```

2. Run the HTTP server by typing:
```sh
prompt> node index.js
```

3. Check out the app by going to http://localhost:8888/start in your local browser

NOTE: If you are having trouble stopping the app type the following to the 
command line: `kill $(ps ax | grep '[j]s' | awk '{ print $1 }')`

<h2>What each file/directory is for:</h2>

- requestHandlers.js = contains all the the request handler implementations that update the response object returned by
  the server
- index.js = starts up the server by calling ```start()``` function in server.js giving it an object called ```handle``` that contains all the supported paths & functions for dealing with them
- README.md = file you are reading now
- router.js = stores code for checking for valid pathnames and calls the correct request handler function in ```requestHandlers/index.js```
- server.js = stores code for starting the server and passes object ```handle``` along with currently requested path and response object