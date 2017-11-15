import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const people = [
    {name: 'Michael'},
    {name: 'Ryan'},
    {name: 'Tyler'}
]
const element = React.createElement('div',
    {className: "hello"},
    people.map(person => (
        React.createElement('li', {
            key: person.name
        }, person.name)
    ))
);

ReactDOM.render(
    element,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
