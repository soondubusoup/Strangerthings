import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link
} from "react-router-dom";
import {
  Posts,
  AccountForm,
  Home,
  NewPost,
  Messages,
  PostView
} from "./";


const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
    const [token, setToken] = useState("");
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    console.log(user)
    
    // const [postId, setPostId] = usestate(null)
    
    const fetchPosts = async () => {
        const resp = await fetch(`${baseURL}/posts`);
        const data = await resp.json();
    
        setPosts(data.data.posts);
      };
    
      useEffect(async() => {
        
        await fetchPosts();
      }, [token]);
    
   const props = {
        token,
        setToken,
        login,
        setLogin,
        user,
        setUser,
        posts,
        setPosts, 
        fetchPosts
    }    
    

    return (
      <div id="content">
        <Link to="/">Home</Link> | <Link to="/newpost">New Post</Link> |{" "}
        <Link to="/posts">Posts</Link> |{" "}
        <Link to="/account/register">Register</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "} 
        {token ? (
          <button
            onClick={() => {
              setToken("");
              setLogin(false);
            }}
          >
            Log out
          </button>
        ) : (
          <Link to="/account/login">Login</Link>
        )}
        <Route exact path="/">
          <Home {...props} />
        </Route>
        <Route exact path="/posts">
          <Posts {...props} />
        </Route>
        <Route exact path="/account/:method">
          <AccountForm {...props} />
        </Route>
        <Route path="/newpost">
          <NewPost {...props} />
        </Route>
        <Route path="/profile">
          <Messages {...props}/>
        </Route>
        <Route exact path="/posts/:postId">
            <PostView {...props}/>
        </Route>
        
      </div>
    );
  };

  export default App;