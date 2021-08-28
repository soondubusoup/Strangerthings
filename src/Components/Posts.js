import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const Posts = ({user, token, posts, fetchPosts}) => {
  
 
  
  return <>  
  {
      posts.map(post => <SinglePost key={post._id} post={post} user={user} token={token} fetchPosts={fetchPosts}>
        {
          post && <Link to={`/posts/${post._id}`}> View Post </Link>
        }
        </SinglePost>)
        
      }
    </>
  
};

export default Posts;


