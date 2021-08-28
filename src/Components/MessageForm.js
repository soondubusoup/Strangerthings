import React, { useState } from 'react';
import { useHistory } from 'react-router';
const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


const MessageForm = ({posts, token, fetchPosts}) => {
  const [content, setContent ] = useState('');
  const history = useHistory()
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    fetch(`${baseURL}/posts/${posts._id}/messages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            message: {
            content 
            }
        })
        }).then(response => response.json())
        .then(result => {
        })
        .catch(console.error);
    // fetch vacations again
  }
  return <>
    <form onSubmit={async(event) => {
        event.preventDefault()

        fetch(`${baseURL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content
                }
            })
            }).then(response => response.json())
            .then(result => {
            })
            fetchPosts()
            history.push('/')
            .catch(console.error);
        }}>
            <input value={content} placeholder='write a message' onChange={(event) => setContent(event.target.value)}>
            </input> 
            <button type='submit' disabled = {!content}></button>
            </form>
  </>
}

export default MessageForm;
