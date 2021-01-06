import React, { Component} from 'react';
import newsposts from "./newspostdemo"
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';

const Body = (props)=>{
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect( async ()=>{
      await  setPosts(newsposts)
    });


        
    // useEffect(()=>{
    //     function increment(){
    //         setCount(count + 1)
    //      }
    //      if(count>=6){
    //          setCount(0)
    //      }

    //     var interval = setInterval(increment, 3000)
    // }, [count])
        
    const increment = ()=>{
        setCount(count + 1)
        if(count>=8){
            setCount(0)
        }
    }
    const decrement = ()=>{
        if(count>0){
        setCount(count - 1)
        }
    }




    
    



    

    
    

    // setInterval(changeCount, 3000)



    const news = posts.map(post=>{
        let link = "/posts/" + post.id
        return(
            
                <Link className="link" to = {link}>
                <div key={post.id} className="individual-news">
                    <h1 className="posttitle">{post.title}</h1>
                    <p className="author"> By - News Author</p>
                </div>
                </Link>
        )
        })

        // const handleClassName = ()=>{
        //     let class = 
        // }

        

    return( 
       
        <div className="news-body-container">
            

            <div className="text-container">
                <h1 className="text"> YOUR <span className="break1"> NO.1 </span> <span className="break2"> ONLINE NEWS GETTER ! </span></h1>
            </div>
            <h3 className="recent-news"> RECENT NEWS ! </h3>
                

            <div className="newsbody">
            <div className="Show">
                {news[count]}
            </div>
            <div className="ctrl-btns">
                <p onClick={decrement} className="minus"> - </p>
                <p onClick={increment} className="plus"> + </p>
            </div> 
            <div className="Hide">
            {news}  
            </div>    
                
            </div>
                    <h4 class="bold"> CHECK THESE ALSO !</h4>
                    
                    <div className="middlecontents">

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents" >
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                        <div className="contents">
                            <img src="" alt="POST IMAGE"/>
                            <p> GBAJABIAMILA - I no longer work for these people !!!</p>
                            <p>By - Author</p>
                        </div>

                    </div>

        </div>
    )
}
export default Body;
