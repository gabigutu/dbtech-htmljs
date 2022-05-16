import { Link } from 'react-router-dom';

export default function AgendaDetails(props) {
    return (<li className="list-group-item">
        {props.name}
        {'('}<a href={`tel:${props.phone}`}>call me</a>{')'}
        <Link to={`/userdetails?id=${props.id}`}>Details about this user</Link>
    </li>);
}
