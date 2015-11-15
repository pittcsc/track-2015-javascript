# Javascript in Practice: Server
---
## Outline
- Node JS
- Server-client interaction
- Async calls vs. Multithreading
- npm
- Middleware
- Routing/Templating
- MongoDB/Mongoose
- Other Server Options
---
## What is Node?
- Essentially a headless V8 engine allows for Javascript outside a browser environment
- Written in C++, very fast/scalable
- Node itself is not a web server
- ExpressJS is an implementation of a web server using Node

Note: Not being run in browser, no DOM. Not running on JavaScript itself, C++ running and interpretting JavaScript.
"node" "console.log('hello');"
---
## What is Express?
- Most popular web application framework for node
- Helps you manage everything: routes/requests/views
- Simplifies and speeds up development vs just using Node

Note: Could you create a web server using just Node? Yes. No point, it will require more lines of code, not as secure as using Express.
"express <appname>" "cd appname" "npm install" "npm start"

---
## Server-Client Interaction
- Client sends some request to server
- Server receives request and sends back a response
- Browser is an application that allows us to send a request to a server
- An Express/Node server must be able to accept these requests and send a response
- "http://my.pitt.edu.com"
![Client/Server](/http-diagram.jpg?raw=true)
Note: "http" lets the browser know it wants to communicate with a server using Hypertext Transfer Protocol
Defines how messages are formmatted and transmitted and what actions Web servers and browers should take in response to various commands.
"my.pitt.edu.com" is a host name will be looked up in one of many caches (browser, OS, router) then onto DNS servers from ISP for the IP address.
 

---

## Asychronous vs Multithreading
- Asychronous programming allows a unit of work to run separately from the main application
- Multithreading is just one technique to implement asychronous processes where code can be run by different processors or cores
- NodeJS is single threaded, instead uses callback functions
- Callback functions are functions that are passed to another function


---

## Example of asychronous programming

```
 var result = database.query("SELECT * FROM hugetable");
 console.log("Hello World");
```
vs.
```
database.query("SELECT * FROM hugetable", function(rows) {
       var result = rows;
    });
console.log("Hello World");
```
Note: In the first example console.log("Hello World"); will not execute until the query returns, if it is a huge database it may take a while.
In the second example we are passing a callback function which will perform some action once the query is completed, in this case set our result to rows. Console.log() can be ran right away.
---
## npm
- Stands for Node Package Manager
- Comes packaged with Node Version Manager (NVM)
- Online repository for publishing of open-source NodeJs projects/modules
- Command-line utility for interacting with that repository and aids in package installtion/version management/dependency management

Note: Very useful for using Node. "npm install" in a directory will download any packages you need as in my example. "npm install <appname>" will install a certain app. -g flag for global installation.
---
## Middleware
- Middleware is any number of functions that are invoked by the ExpressJS before requests are handled
- Are invoked in the order they are added
- Usually added using app.use(..);
---
## Middleware Example
```
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/help', function(req, res) {
  res.send('Nope.. nothing to see here');
});
```
Note: Basic express app, will go in app.js file. express() to initialize. app.get are routes
What if we wanted to log the req we got to the console for every route? We could add "console.log()" under every route but what if we have a lot of them/or just lazy? Middleware!
---
## Middleware Example 2
```
var app = express();

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/help', function(req, res) {
  res.send('Nope.. nothing to see here');
});
```
Note: Now, app.use will run before every request. We could also specify a route for app.use if we only wanted it to run when "/help" is requested.
The next() is important so that express knows to move onto the next middleware. Ordering is also important, if we had app.post before app.use, it wouldn't be ran.
---
## Routing, templating
- Jade and server-side rendering
- app.js
```
app.set('view engine', 'jade');
```
```
app.get('/', function (req, res) {
res.render('index', { title: 'Hey', 
	msg: 'Hello'});
});
```
- views/index.jade
```
html
  head
    title!= title
  body
    h1!= msg
```

Note: template engines are used to render views on the server side, what user sees. Jade is one popular choice to use with express.
Almost looks like a shorthand html syntax, allows you to set variables in jade and can set them to different values in express and render them to user. See example.
---
## MongoDB
- NoSQL differs from traditional relational databases
- MongoDB is a type of NoSQL "document-oriented" database
- Able to store unstructured data, each record/data thought of as a "document"
- BSON is a Binary extention of JSON, used by MongoDB to store these documents
- Some benefits, but finicky
Note: Pros of Mongo: flexible, developer friendly, scalable, Cons: known to be unreliable at times, RAM intensive
---
## Mongoose
- "npm install mongoose"
```
var mongoose = require('mongoose');
```
- One package for Node that allows you to interact with MongoDB
- CRUD - create, read, update, and delete operations
- Another alternative is Monk
Note: Simply offer easy ways to interact with MongoDB
---
## Other Javascript server options
- Firebase- backend as a service, no need to manage your servers by yourself
- Meteor- alternative to express also written on top of Node
- Seneca- not a web framework, but instead offers microservices for Node
Note: Firebase pretty much does everything for you, has an api that lets you store/sync data across multiple clients
Meteor is a newer alternative to express, also a web framework does some things a little differently
Seneca- kind of strange, provides plugins that look after the foundations of your app, is able to takes care of the structure of your code, not very beginner friendly
