import React from 'react';

export default class Something extends React.Component {
    
    promiseUsers: Promise;

    constructor(props) {
        super(props);
        this.state = {
            name: 'Vasile',
            age: 20,
            users: []
        }

        this.promiseUsers = fetch('http://example.com/users');

        this.promiseUsers.then(response => {
            this.setState(
                {
                    users: await response.json()
                }
            )
        });
    }

    sayHi(name) {
        console.log('State before', this.state.name);
        this.setState({ name });
    }

    render() {
        return (<div>
                <h1>Hello, {this.state.name}!</h1>
                <button onClick={() => this.sayHi(this.state.name + 'x')}>Say Hi</button>
                <table></table>
            </div>);
    }

    componentDidMount() {
        
        
        // fetch(); ??
    }
}
