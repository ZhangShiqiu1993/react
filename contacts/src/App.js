import React, { Component } from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
    state = {
        screen: 'list',
        contacts : []
    };

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({contacts})
        })
    }

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }));

        ContactsAPI.remove(contact);
    };

    render() {
        return (
            <div className='app'>
                {this.state.screen === 'list' && (
                    <ListContacts
                        onNavigate={() => {
                            this.setState({screen: 'create'})
                        }}
                        onDeleteContact={this.removeContact}
                        contacts={this.state.contacts}
                    />
                )}
                {this.state.screen === 'create' && (
                    <CreateContact
                    />
                )}
            </div>
        )
    }
}

export default App;
