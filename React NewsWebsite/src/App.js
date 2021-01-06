import React, { Component } from 'react';
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import Home from "./component/routes/home"
import About from "./component/routes/aboutus"
import Newspage from "./component/newspage"
import newsposts from "./component/newspostdemo";
import Contact from "./component/routes/contact";
import Input from "./component/input"
import {BrowserRouter as Router,Route, Link} from "react-router-dom";

class App extends Component {
  state = { 
    classname : "search-overlay",
    searchvalue : "",
    posted:newsposts
   }

  

  render() { 
  
    const searchednews =  this.state.posted.filter( post=>{
      const splitted = post.title.split(" ")
      for (const text of splitted) {
       const check = (text === this.state.searchvalue)
       const secondSearch = post.title === this.state.searchvalue
       if(check){
          return post
       }else if(secondSearch){
           return post
       }
      }
    });

    console.log(searchednews)

    const handleSearchInput = (e)=>{
      console.log(e.target.value)
      this.setState({
        searchvalue:(e.target.value)
      })
    }


    const handleChange = ()=>{
      this.setState({
        classname:(this.state.classname === "search-overlay-show" ? "search-overlay-show" : "search-overlay-show")
      });
      
    }
    const handleExit = ()=>{
      this.setState({
        classname:(this.state.classname === "search-overlay-show" ? "search-overlay" : "search-overlay")
      })
    }
  
    const searchContents = ()=>{
     const news = Newspage;
     return news
    }

// thebodysearchclassname={this.state.classname}
    
    const searchresult = searchednews === undefined ? "Ooops!!! No post Found, try a more exact string" :(searchednews.map(post=>{
      let link = "/posts/" + post.id
      return <Link onClick={handleExit} to={link}> <div key= {post.id}  className="search-res">{post.title}</div> </Link>
    })
    )
    
  

    return ( 
                
      <div>
        <Router>
          <Header click={handleExit} searchvalue={this.state.searchvalue} handledsearch={handleSearchInput} searched = {searchednews} inputvalue={searchContents} pop={handleChange}/>
          <Route  exact path = "/" render = {(()=> <Body data={searchednews}/>  )}/>
            <div className={this.state.classname}>
            <p className="exit" onClick={handleExit}> X </p>
            {searchresult}
            </div>
          <Route path = "/contact" 
            component = { Contact }
            />
            <Route  path = "/aboutus" 
            component = { About }
            />
            <Route exact path = "/posts/:post" 
            component = { Newspage }
            />
          <Footer/>
        </Router>
      </div>
     );
  }
}
 
export default App ;