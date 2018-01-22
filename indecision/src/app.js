console.log("running");

// JSX 
var template = (
    <div>
        <h1>Shiqiu</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: "Andrew",
    age: 26,
    location: "Philadelphia"
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}


var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);