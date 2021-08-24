// import React, {useState} from "react"
// import { useParams } from 'react-router'
// import { Link } from 'react-router-dom'

// const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


// const Login = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const params = useParams();
  

//   return (
//      <>
//       <h1>Login</h1>
//       <div>This is the {params.method} method</div>
//       <form onSubmit={async (event) => {
//         event.preventDefault()
        
        
//       const resp = await fetch(`${baseURL}/users/${params.method}`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           user: {
//             username,
//             password
//           }
//         })
//       })
//       const respObj = await resp.json()

//       setToken(resObj.data.token)
          
      
//       }}>
//         <input type="text" placeholder="username" value ={username} 
//         onChange={(event) => setUsername(event.target.value)}></input>
//         <input type="text" placeholder="password" value ={password} 
//         onChange={(event) => setPassword(event.target.value)}></input>
//         <button type="submit">Submit</button>
//         <Link to='/account/login'>Click here to Login</Link>
//       </form>
//     </>
//   );
// };

import React from "react";

const Login = () => {
  return (
    <>
      <h1>Login or Register below</h1>
    </>
  );
};



export default Login
