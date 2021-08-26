import React, {useState} from "react"
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";


const AccountForm = ({setToken, user, setUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const params = useParams();
  

  return (
     <>
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
            username,
            password
          }
        })
      })
      
      const respObj = await resp.json();
      console.log("respObj", respObj)
      setToken(respObj.data.token)

      if(respObj.data) {       
          const fetchUser = await fetch(`${baseURL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${respObj.data.token}`
          },
        })
        const result = await fetchUser.json();
        const data=result;
        if (data.data) {
          setUser(data.data)
          
        }
          
        console.log('user:', user)
      
    
        history.push('/')
      }
          
      
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