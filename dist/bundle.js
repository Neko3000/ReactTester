"use strict";

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
    background: "orange",
    color: "white",
    fontfamily: "verdana"
};

var title = React.createElement('h1', { id: 'title', className: 'header', style: style }, 'Heelo');

ReactDOM.render(React.createElement(
    "h1",
    { id: "title", className: "header", style: style },
    "Greeting"
), document.getElementById('react-container'));
