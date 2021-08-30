import React from 'react'
import { useParams } from 'react-router';


const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";
const SinglePost = ({children, post, user, token, fetchPosts}) => {
    console.log('user', user)
    console.log('post', post)
    console.log('token', token)
    
    return post 
        ? <div className="some">
            
            <h3>Title: {post.title}</h3>
            <h5>Description: {post.description}</h5>
            <h5>Price: {post.price}</h5>
            <h5>Location: {post.location}</h5>
            <h5>Author: {post.author.username}</h5>
            

            <div>{post.description}</div>
            <span> 
                {
                    children
                }
        
            </span>
          </div>
      : "loading..."
}

export default SinglePost;


