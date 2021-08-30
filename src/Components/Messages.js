import React from "react";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const Messages = ({ user }) => {
  const userMessages = user.messages;
  console.log(userMessages);
  
  return (
    <div className='prev-msgs'>
          <h1>Messages Received</h1>
          {
            userMessages.map(message => {
              return <>
              {user._id !== message.fromUser._id ?
               <div>
                     <h3>Item: {message.post.title}</h3>
                   <h4>Message from: {message.fromUser.username}</h4>
                  <h4>User says: {message.content}</h4>
                </div>
              : ''}
              </>
            })
          }
          <h1>Messages Sent</h1>
          {
            userMessages.map(message => {
              return <>
              {user._id === message.fromUser._id ?
               <div>
                     <h3>Item: {message.post.title}</h3>
                 <h4>Message from: {message.fromUser.username}</h4>
                   <h4>User says: {message.content}</h4>
                </div>
              : ''}
              </>
            })
          }
        </div>
  )
}

export default Messages;

