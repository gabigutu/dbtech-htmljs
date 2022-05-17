import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import User from './User';

import ReactDOM from 'react-dom';

function useQuery() {

    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function useId() {

    let { id } = useParams();

    return id;
}

function UserDetails() {
    let idParam = useId();
    console.log('idParam', idParam);

    fetch('https://jsonplaceholder.typicode.com/users/' + idParam).then(
        (response) => {
            response
                .json()
                .then((object) =>
                    ReactDOM.render(
                        <User name={object.name} email={object.email} showLink='0' />,
                        document.getElementsByTagName('div')[0]
                    )
                );
        }
    );
    return <div>UserDetails</div>;
}

export default UserDetails;
