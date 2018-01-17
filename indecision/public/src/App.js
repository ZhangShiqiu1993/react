console.log("running");

// JSX 
var template = React.createElement(
    "h1",
    { id: "xx" },
    "Something new"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);