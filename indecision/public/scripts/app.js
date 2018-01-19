"use strict";

console.log("running");

// JSX 
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Shiqiu"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
