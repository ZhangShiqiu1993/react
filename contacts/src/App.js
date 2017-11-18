import React, { Component } from 'react';

class ContactList extends Component {
    render() {
        const people = this.props.contacts

        return <ol>
            {people.map(person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <ContactList contacts={[
              {name: 'Micheal'},
              {name: 'Ryan'},
              {name: 'Tyler'}
          ]}/>
          <ContactList contacts={[
              {name: 'Amanda'},
              {name: 'Richard'},
              {name: 'Geoff'}
          ]}/>
      </div>
    );
  }
}

export default App;
