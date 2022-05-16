import React from 'react';
import axios from 'axios';
import AgendaDetails from './AgendaDetails.jsx';

class Agenda extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            dataReceived: false
        };
        this.contacte = [];
        this.simulateUpdateContact = this.simulateDeletedContact.bind(this);
    }

    render() {
        return (<ul className="list-group">
            {this.contacte.map(function (contact) {
                return <AgendaDetails name={contact.name} phone={contact.phone} id={contact.id} />;
            })}
        </ul>);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                test: 'vasile',
                damidate: true
            }
        }).then(response => {
            console.log('Am primit ', response.data);
            // response.data -> contacts
            this.setState({
                contacts: response.data,
                dataReceived: true
            });
            this.contacte = response.data;
            // this.simulateDeletedContact();
        })
    }

    simulateDeletedContact() {
        let that = this;
        setTimeout(function() {
            console.log('Updating contact');
            // that.contacte[2].name = 'DELETED';
            let contactsCopy = that.state.contacts;
            contactsCopy[2].name = 'DELETED';
            that.setState({
                contacts: contactsCopy
            });
        }, 2000);
    }
}

export default Agenda;
