import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ContactList extends React.Component {
    render() {
        const people = [
            {name: 'Michael'},
            {name: 'Ryan'},
            {name: 'Tyler'}
        ]


        return <ol>
            {people.map( person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>

    }
}

ReactDOM.render(
    <ContactList/>,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
