import { useParams, useLocation } from 'react-router-dom';
import UserDetailsDetails from './UserDetailsDetails';
import React from 'react';

export default function UserDetails() {

    let query = useQuery();

    // return React.useMemo(() => new URLSearchParams(search), [search]);

    console.log('id = ', query.get('id'));

    return <UserDetailsDetails id={2}></UserDetailsDetails>;
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}