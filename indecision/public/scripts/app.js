"use strict";

console.log("running");

// JSX 
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "Put your life in the hands of a computer"
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

var user = {
    name: "Andrew",
    age: 26,
    location: "Philadelphia"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var count = 0;
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count : ",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "button" },
        "+1"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
