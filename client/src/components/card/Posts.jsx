import Post from './postCard';
import postsData from './postsData';
// import React, { useState } from 'react';






const Posts = ({socket,user}) => {
// const [I,setI]=useState()
  
    

const img= postsData.map((p)=>{
if(p.user===user){return(p.userImg)}
  })
    console.log(img)
  

  return (
    <div>
    {postsData.map((post) =>{
      
    return(
<Post key={post.id} 
 username={post.username}
 fullname={post.fullname}
 userImg={post.userImg}
 postImg={post.postImg}
 socket={socket}
 user={user}
// userI={I}
/>)

  })}
    </div>
  )
}

export default Posts
