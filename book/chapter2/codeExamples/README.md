Running a HTTP web server
=========================

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

NOTE: If you are having trouble stopping the app type the following to the 
command line: `kill $(ps ax | grep '[j]s' | awk '{ print $1 }')`