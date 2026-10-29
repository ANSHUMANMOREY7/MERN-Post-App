import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
const Feed = () => {

    const [ posts , setposts] = useState([
        {
        _id : "1" ,
        caption : "This is my first post" ,
        image :"https://ik.imagekit.io/trdv8ikfr/image_MsRrq99oj.jpg"
        }
    ])
    
    useEffect(()=>{
        
        axios.get('http://localhost:3000/posts')
        .then((res)=>{

            setposts(res.data.posts)
        })

    },[])
    return (      
    
    <section className='feed-section'>  
    {
            posts.length > 0 ? (
        posts.map((post)=>(
            <div key={post._id} className='post-card'>
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>
            </div>      
        ))
    ) : (
        <h1>No posts available</h1>
        )
    }
    
    </section>
  ) 
}

export default Feed