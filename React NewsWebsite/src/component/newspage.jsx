import react, { useEffect, useState } from "react"
import newsposts from "./newspostdemo"

const Newspage = (props)=>{
    const [loadedPost, setloadedPost] = useState([])
    const [postId, setpostId] = useState("")
    useEffect( async ()=>{
        await setloadedPost(newsposts)
        await setpostId(parseInt(props.match.params.post))
    })

    var theposts =  loadedPost.find((posts)=>{
        return posts.id === postId
    })
    
    let newpost = theposts ? 
        <div>  
            <div className="title">
            {theposts.title}
            </div> 
            <div className="body"> {theposts.body} </div> </div> : "Loading..."

    // const displayNews = userpost  ? (
    //     userpost.map(posts =>{
    //         <div className="news">
    //             <h2>{posts.title}</h2>
    //         <p>{posts.body}</p>
    //         </div>
    //     })
    // ) : "Loading. . ."
    return(
        <div className="mt">
           {newpost}
        </div>
    )
}
export default Newspage;
