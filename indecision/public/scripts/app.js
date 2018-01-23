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
var addOne = function addOne() {
  console.log('addOne');
  count = count + 1;
};
var minusOne = function minusOne() {
  console.log("minusOne");
};
var reset = function reset() {
  console.log("reset");
};
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
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
