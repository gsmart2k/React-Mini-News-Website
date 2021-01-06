import React, { Component } from 'react';
import posts from "../component/posts"


class Userpost extends Component {
    state = { 
        post:""
     }
     componentDidMount(){
        let id = this.props.match.params.userpost_id;
        console.log(this.props)
        let myposts = posts
        this.setState({post:myposts})
     }
    render() { 
        return ( 
            <div>
             
            </div>
         );
    }
}
 
export default Userpost;