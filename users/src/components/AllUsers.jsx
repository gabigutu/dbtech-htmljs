import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';

class AllUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
        // const query = this.useQuery();
        // console.log('id ', query.get('id'));

        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            // console.log(response);
            response.json().then((users) => {
                // console.log(users[0]);
                this.setState({ users });
            });
        });


    }

    // useQuery() {

    //     const { search } = useLocation();
    
    //     return React.useMemo(() => new URLSearchParams(search), [search]);
    // }

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
                                showLink='true'
                            />
                        );
                    })}
                </ul>
                <Pagination start="7" />
            </>
        );
    }

    componentDidMount() {
    }
}

export default AllUsers;
