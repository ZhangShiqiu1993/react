console.log("running");

// JSX 
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>Put your life in the hands of a computer</p>
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

let count = 0;
const addOne = () => {
  console.log('addOne');
  count = count + 1;
};
const minusOne = () => {
  console.log("minusOne");
};
const reset = () => {
  console.log("reset");
};
const templateTwo = (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);