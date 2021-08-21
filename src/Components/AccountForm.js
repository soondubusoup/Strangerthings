import React, {useState} from "react"
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


const AccountForm = ({setToken}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const params = useParams();
  

  return (
     <>
      {/* <h1>Register</h1> */}
      <div>This is the {params.method} method</div>
      <form onSubmit={async (event) => {
        event.preventDefault()
        
        
      const resp = await fetch(`${baseURL}/users/${params.method}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      })
      
      const respObj = await resp.json();
      // if(respObj.data) {
      //   setToken(respObj.data.token);
      //   setGuest(respObj.data.guest);
      //   if (respObj.data.token) {
      //     history.push('/');
      //   }
      // }
      console.log(respObj)
      setToken(respObj.data.token)
          
      
      }}>
        <input type="text" placeholder="username" value ={username} 
        onChange={(event) => setUsername(event.target.value)}></input>
        <input type="password" placeholder="password" value ={password} 
        onChange={(event) => setPassword(event.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
      <Link to='/account/register'>Click here to Register</Link>
    </>
  );
};

export default AccountForm
