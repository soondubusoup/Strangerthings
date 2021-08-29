import React, { useState } from "react"
import { useHistory, useParams } from "react-router";
const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";
import SinglePost from "./SinglePost";

const EditPost = ({token, setPosts, posts, fetchPosts}) => {
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)
    const history = useHistory()
    const {postId} = useParams()
    
    const post = posts.find(post => post._id === postId)
    return <> 
    <h1>Edit Post</h1>
    <SinglePost post={post} >
         
    </SinglePost>
    <form onSubmit={async(event) => {
        event.preventDefault()

        fetch(`${baseURL}/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title,
                description,
                price,
                location,
                willDeliver
                }
            })
            }).then(response => response.json())
            .then (result => { 
            })
            .catch(console.error);
            
            fetchPosts()
            history.push("/posts")
        }}>
        
        <fieldset>
            <label>Title</label>
            <input type="text" placeholder ={`${post.title}`} value={title} onChange= {(event) => setTitle(event.target.value)}></input>
        </fieldset>
        
        <fieldset>
            <label>description</label>
            <input type="text" placeholder ={`${post.description}`} value={description} onChange= {(event) => setDescription(event.target.value)}></input>
        </fieldset>

        <fieldset>
        <label>price</label>
        <input type="text" placeholder ={`${post.price}`} value={price} onChange= {(event) => setPrice(event.target.value)}></input>
        </fieldset>

        <fieldset>
            <label>location</label>
            <input type="text" placeholder ={`${post.location}`} value={location} onChange= {(event) => setLocation(event.target.value)}></input>
        </fieldset>

        <fieldset>
            <label>willDeliver</label>
            <select type="text" placeholder ={`${post.willDeliver}`} value={willDeliver} onChange= {(event) => setWillDeliver(event.target.value)}>
                <option value='false'>no</option>
                <option value='true'>yes</option>
            </select>
        </fieldset>
         <button type="submit">Post</button>   
         
            
        </form>

        </>

}





export default EditPost;