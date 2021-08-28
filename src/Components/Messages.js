// import React, { useState } from "react"

// const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


// const Messages = ({user, token}) => {
//   // debugger 
//   const userMessages = user.messages
  
//   console.log(userMessages)
//    return  <div className="content">
//     <h1>Genshin</h1>
//     {
//     token ? 
//     userMessages.map(message => {
//      user._id !== message.fromUser._id 
//      ? <div className="some">
//           <br />
//           <h3>Message:{message.fromUser.username}</h3>
          
//           <h3>{message.content}</h3>
          
//           <br />
//           <span>{message.post.title}</span>
//         </div> 
//       : ''
//      })
//     }
//   </div> 

// };

// export default Messages;

import React, { useState } from "react"

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


const Messages = ({user, token}) => {
  // debugger 
  const userMessages = user.messages 
  console.log(userMessages)
return (
  <div className="content">
    <h1>Genshin</h1>
    {
    // userMessages ?    
    userMessages.map((message) => {
      
      return (
        <div className="some">
          <br />
          <h3>Message:{message.fromUser.username}</h3>
          
          <h3>{message.content}</h3>
          
          <br />
          <span>{message.post.title}</span>
        </div>
      )
    })}
  </div>
);
};

export default Messages;