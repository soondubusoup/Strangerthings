import React from "react";
import { useParams } from "react-router";
import SinglePost from './SinglePost'
import MessageForm  from "./MessageForm";


const PostView = ({posts, user, token} ) => {
    const {postId} = useParams()
    console.log(posts)
    const post = posts.find(post => post._id === postId) 
    console.log(post)
    return <>
        <SinglePost post={post}> 
          {user._id !== post.author._id ? <MessageForm post={post} token={token} user={user} /> : null} 
        </SinglePost>
    </>
}


export default PostView;