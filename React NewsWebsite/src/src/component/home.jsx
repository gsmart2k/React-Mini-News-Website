import React, {Component}from "react";
import posts from "../component/posts"
import {Link, NavLink} from "react-router-dom"
import image from "../component/image.png"


class Home extends Component{
state = {
  theposts:""
}
componentDidMount(){
  this.setState({theposts:posts})

}

render(){
  console.log(this.state.theposts);
  const { theposts } = this.state;
  const depost = theposts.length === 0 ? (
    <div>OOOPS, NO POST FOUND !!!</div>
    ) : (
      theposts.map(posts=>{
      return(
        <div className="contain" key ={posts.userId}>
          <NavLink to={'/' + posts.userId }><div className="title">{posts.title}</div></NavLink>
          <div className="">
          <img alt="hey i got a prop for you"  className="image" src = {image}></img>
            <p className="body">{posts.body}</p>
            </div>
            <div className="button">{posts.button}</div>
        </div>
      )
    })
    )
   
  return (
    <div>
       <p className="nav-links">HOME</p>
      <div>
        {depost}
        </div>
       </div>
   )
}

}
export default Home;
