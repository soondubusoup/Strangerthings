import React, { useEffect, useState } from "react";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const Posts = ({user, token}) => {
  const [posts, setPosts] = useState([]);
  console.log(posts)
  console.log(user)
  console.log(token)
  const fetchPosts = async () => {
    const resp = await fetch(`${baseURL}/posts`);
    const data = await resp.json();

    setPosts(data.data.posts);
  };

  useEffect(async() => {
    
    await fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const respObj = await fetch(`${baseURL}/posts/${postId}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
      
    });
    console.log('respObj: ', respObj);
    await fetchPosts();
  }

  return (
    <div className="content">
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div className="some">
            <br />
            <h3>{post.title}</h3>
            
            <h3>{post.location}</h3>
            
            <br />
            <span>{post.description}</span>
            <span> {
              user._id===post.author._id ? <button onClick={() => handleDelete(post._id)}>Delete</button> : ""
              
              }

            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;


