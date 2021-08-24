import React, { useEffect, useState } from "react";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`${baseURL}/posts`);
      const data = await resp.json();

      setPosts(data.data.posts);
    };
    fetchPosts();
  }, []);

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
          </div>
        );
      })}
    </div>
  );
};

export default Posts;


