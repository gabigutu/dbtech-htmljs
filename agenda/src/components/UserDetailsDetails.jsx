import axios from 'axios';
import React from 'react';
import _ from 'lodash';

export default class UserDetailsDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            user: {
                id: props.id,
                name: 'None',
                posts: []
            }
        }
        console.log('userdetails constructor');
    }

    render() {
        return (
            <h1>User {this.state.user.name} {'('}#{this.state.user.id}{')'}</h1>,
            this.state.user.posts.length > 0 ? this.state.user.posts.map(post => {
                return (<article>
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                </article>)
            }) :
                <p>No articles found</p>
        );
    }

    filterPostsByUserId(userId) {
        // request jsonplaceholder/posts 
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response => {
                const usersByIdArr = _.groupBy(response.data, 'userId');
                console.log('usersByIdArr', usersByIdArr);

                const userCopy = this.state.user;
                userCopy.posts = usersByIdArr[userId];

                this.setState({
                    user: userCopy
                });
            });
        // gather posts of this user
    }

    componentDidMount() {
        this.filterPostsByUserId(3);

        console.log('userdetails did mount');
    }

}
