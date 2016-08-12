//REQUIRE React, ReactDOM, Component
var React = require('react');
var ReactDOM = require('react-DOM');
var Component = require('./Component.jsx');

var props = window.PROPS;
//Loaded on Client-Side
//Use ReactDOM to render React element to the document
ReactDOM.render(
//Component now returns the full HTML Markup
//Rendering to the tope level document node is valid
//otherwise there will be an invariant error
  React.createElement(Component, props), document
);
