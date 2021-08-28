import React from 'react'
import { useParams } from 'react-router';


const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";
const SinglePost = ({children, post, user, token, fetchPosts}) => {
    console.log('user', user)
    console.log('post', post)
    console.log('token', token)
    
    return post 
        ? <div className="some">
            
            <h3>{post.title}</h3>
            
            <h3>{post.location}</h3>

            <span>{post.description}</span>
            <span> 
                {
                    children
                }
        
            </span>
          </div>
      : "loading..."
}

export default SinglePost;

