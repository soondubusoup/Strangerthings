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
  Login,
  NewPost,
  Messages
} from "./Components/index.js";
import "./style.css";

const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({})
  // const [postId, setPostId] = usestate(null)
  console.log(token);
  console.log('user: ', user)
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
        <Home user={user} token={token} />
      </Route>
      <Route path="/posts">
        <Posts user={user} token={token} />
      </Route>
      <Route path="/account/:method">
        <Login setUser={setUser} />
      </Route>
      <Route exact path="/account/:method">
        <AccountForm setToken={setToken} setUser={setUser} user={user} />
      </Route>
      <Route path="/newpost">
        <NewPost token={token} />
      </Route>
      <Route path="/profile">
        <Messages token={token} user={user} />
      </Route>
      
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />,
  </Router>,
  document.getElementById("app")
);
