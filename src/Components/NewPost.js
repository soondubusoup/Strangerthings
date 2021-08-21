import React, { useState } from "react"

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const NewPost = ({token}) => {
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)

    return <> 
    <h1>Create Post</h1>

    <form onSubmit={async(event) => {
        event.preventDefault()

        fetch(`${baseURL}/posts`, {
            method: "POST",
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
            .then(result => {
                console.log(result);
            })
            
            .catch(console.error);
        }}>
        
        <fieldset>
            <label>Title</label>
            <input type="text" placeholder ='title' value={title} onChange= {(event) => setTitle(event.target.value)}></input>
        </fieldset>
        
        <fieldset>
            <label>description</label>
            <input type="text" placeholder ='description' value={description} onChange= {(event) => setDescription(event.target.value)}></input>
        </fieldset>

        <fieldset>
        <label>price</label>
        <input type="text" placeholder ='price' value={price} onChange= {(event) => setPrice(event.target.value)}></input>
        </fieldset>

        <fieldset>
            <label>location</label>
            <input type="text" placeholder ='location' value={location} onChange= {(event) => setLocation(event.target.value)}></input>
        </fieldset>

        <fieldset>
            <label>willDeliver</label>
            <select type="text" placeholder ='no/yes' value={willDeliver} onChange= {(event) => setWillDeliver(event.target.value)}>
                <option value='false'>no</option>
                <option value='true'>yes</option>
            </select>
        </fieldset>
         <button type="submit">Post</button>   
            
        </form>

        </>

}





export default NewPost;