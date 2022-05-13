import React, { useState } from 'react';
import User from './User';

class AllUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            // console.log(response);
            response.json().then((users) => {
                // console.log(users[0]);
                this.setState({ users });
            });
        });
    }
    render() {
        return (
            <>
                <ul>
                    {this.state.users.map(function (object, i) {
                        return (
                            <User
                                id={object.id}
                                name={object.name}
                                email={object.email}
                                key={i}
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default AllUsers;
