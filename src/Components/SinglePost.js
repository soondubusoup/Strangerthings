import React from 'react'
import { useParams } from 'react-router';


const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";
const SinglePost = ({children, post, user, token, fetchPosts}) => {
    console.log(user)
    console.log(post)
    const handleDelete = async (postId) => {
        const respObj = await fetch(`${baseURL}/posts/${postId}`, {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
          
        });
        await fetchPosts();
      }
    return post 
        ? <div className="some">
            
            <h3>{post.title}</h3>
            
            <h3>{post.location}</h3>

            <span>{post.description}</span>
            <span> {
                user._id === post.author._id ? <button onClick={() => handleDelete(post._id)}>Delete</button> : ""
                
                }
                {
                    children
                }
        
            </span>
          </div>
      : "loading..."
}

export default SinglePost;

// import React from 'react'

// const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";
// const SinglePost = (props) => {
//     return props.post 
//         ? <div className="some">
//             <br />
//             <h3>{props.post.title}</h3>
            
//             <h3>{props.post.location}</h3>
            
//             <br />
//             <span>{props.post.description}</span>
//           </div>
//       : "loading..."
// }

// export default SinglePost;


