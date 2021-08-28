import React from "react";
import { useParams } from "react-router";
import SinglePost from './SinglePost'
import MessageForm  from "./MessageForm";

const PostView = ({posts, user, token} ) => {
    const {postId} = useParams()
    const post = posts.find(post => post._id === postId) 
    return <>
    <SinglePost post={post}> 
    <MessageForm post={post} token={token}/>
    
    </SinglePost>
    </>
}


export default PostView;