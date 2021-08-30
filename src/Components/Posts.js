// import React, { useEffect, useState } from "react";
// import SinglePost from "./SinglePost";
// import Search from "./Search";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router";

// const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

// const Posts = ({ user, token, posts, fetchPosts }) => {
//   const handleDelete = async (postId) => {
//     const respObj = await fetch(`${baseURL}/posts/${postId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     await fetchPosts();
//   };

//   return (
//     <>
//       {posts.map((post) => (
//         // {
//         //   <Search posts={posts} setPosts={setPosts} fetchPosts={fetchPosts} />
//         // }
//         <SinglePost
//           key={post._id}
//           post={post}
//           user={user}
//           token={token}
//           fetchPosts={fetchPosts}
//         >
//           {user._id === post.author._id ? (
//             <button onClick={() => handleDelete(post._id)}>Delete</button>
//           ) : (
//             ""
//           )}
//           {post && <Link to={`/posts/${post._id}`}> View Post </Link>}
//           {post && <Link to={`/edit/${post._id}`}> Edit Post </Link>}
          
          
//         </SinglePost>
//       ))}
//     </>
//   );
// };

// export default Posts;

import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const Posts = ({ user, token, posts, fetchPosts,setPosts }) => {
  const handleDelete = async (postId) => {
    const respObj = await fetch(`${baseURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await fetchPosts();
  };

  return (
    <>

    <Search posts={posts} setPosts={setPosts} fetchPosts={fetchPosts} />
  {posts.map((post) => (
        <SinglePost
          key={post._id}
          post={post}
          user={user}
          token={token}
          fetchPosts={fetchPosts}
        >
          {user._id === post.author._id ? (
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          ) : (
            ""
          )}
          {post && <Link to={`/posts/${post._id}`}> View Post </Link>}
          {post && <Link to={`/edit/${post._id}`}> Edit Post </Link>}


        </SinglePost>
      ))}
    </>
  );
};

export default Posts;
