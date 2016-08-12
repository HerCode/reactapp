//add Babel Require Hook for Pre-Set Register
require('babel-register')({
    presets: ['react']
});
//REQUIRE Express
var express = require('express');
//Instantiate the App
var app = express();
//REQUIRE React, ReactDOMServer, and Component
var React = require('react');
var ReactDOMServer = require('react-DOM/server');
var Component = require('./Component.jsx');

//USE Static Directory
app.use(express.static('public'));
//CREATE a ROUTE for index page
app.get('/', function(request, response){
//Update HTMl so ReactDOMServer renders React element to a string

//CREATE a prop named 'title', give it a value
//Name props anything, make sure they do not conflict
//with 'style', 'class name', 'onClick', 'Javascript Reserve Words' etc.
var props = { title: 'Universal React'};

//tell index to display "Hello World!"
   var html = ReactDOMServer.renderToString(
//Pass in 'props' in second argument of 'createElement'
     React.createElement(Component, props)
   );
//'<h1>Hello World!</h1>';
//send message to page
response.send(html);
});

//SPECIFIY Port to listen on
var port = 3000;
app.listen(port, function(){
//log base url to the console once server has started
console.log('http://localhost:' + port);

});
