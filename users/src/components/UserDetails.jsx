import React from 'react';
import { useLocation } from 'react-router-dom';
import User from './User';

import ReactDOM from 'react-dom';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function UserDetails() {
    let query = useQuery();

    fetch('https://jsonplaceholder.typicode.com/users/' + query.get('id')).then(
        (response) => {
            response
                .json()
                .then((object) =>
                    ReactDOM.render(
                        <User name={object.name} email={object.email} />,
                        document.getElementsByTagName('div')[0]
                    )
                );
        }
    );
    return <div>UserDetails</div>;
}

export default UserDetails;
