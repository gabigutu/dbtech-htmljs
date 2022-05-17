import React from 'react';
import { Link } from 'react-router-dom';

function User(props) {
    return (
        <li>
            <span>{props.name}</span>
            <br />
            <span>{props.email}</span>
            {/* <Link to={`/userdetails?id=${props.id}`}>User Details</Link> */}
        </li>
    );
}

export default User;
