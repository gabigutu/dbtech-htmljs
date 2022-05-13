import {
    useParams
} from "react-router-dom";

function Pagination() {
    let { start } = useParams();

    console.log('Start = ', start);
}

export default Pagination;