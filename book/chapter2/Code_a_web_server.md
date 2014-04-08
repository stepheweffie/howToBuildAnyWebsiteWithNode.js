Code a web server
=================

<h3>What are web servers?</h3>
The purpose of a web server is to respond to HTTP requests.
So what are HTTP requests? An example of a GET HTTP request is when a user
goes to their browser and types `www.google.com` which is recieved by Google's 
server's as a user needing the code to display the homepage of Google. Google's
servers then give your browser a response like HTTP/1.1 200 Ok called the status
line. You might be more familiar with when you accidentally go to a webpage that
doesn't exist and see the error `404 Not Found`. For example go to:

`http://www.google.com/nonexistingpage` in your browser

Here is what each part of an example GET request is called:

<h2>GET request terminology</h2>
- GET request
  + parameters in URL
  + used for fetching documents
  + shouldn't change the server's databases 
  + EXAMPLE URL = http://www.example.com/folderName/image.png
    - example request line = `GET /folderName/image.png HTTP/1.1`
      + method = `GET` = type of request making to the server
      + path = `/folderName/image.png`
      + version = `HTTP/1.1`
        - a request line is followed by lines of headers:
          + `Host: www.example.com`
          + `User-Agent: chrome`
          + `Content-Type: text/html`
    - SO your browser in your machine makes a request to the server and then
      the server gives you back a response called the status line
    - example status line = HTTP/1.1 200 Ok
      + status code = `200` other common status codes include:
        - 200 Ok
        - 302 Found
        - 404 Not Found
        - 500 Server Error
      + reason phrase = `Ok`

To learn how to code a web server go read the popular 
[Node Beginner Book](http://www.nodebeginner.org/#a-basic-http-server) 
on how to create a nice HTTP web server. 

You can view the example commented code in the folder 
[codeExamples](./codeExamples) that is specifically for running a HTTP server
on cloud 9 IDE so the code won't work if you aren't on Cloud 9.