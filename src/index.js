import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, withRouter, Link,} from "react-router-dom";
import { Posts, AccountForm, Home, Login, NewPost  } from "./Components/index.js";
import "./style.css";



const baseURL = "https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT";

const App = () => {
  const [token, setToken] = useState('')
  return (
    <div id="content">
      <Link to="/">Home</Link> | <Link to="/posts">Posts</Link> |{" "}
      | <Link to="/account/login">Login</Link> |{" "} | <Link to = '/newpost'>New Post</Link>
      <Link to="/account/register">Register</Link>
      <Route exact path="/">
        <h1> Stranger's Things</h1>
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/account/:method">
        <Login />
      </Route>
      <Route exact path="/account/:method">
        <AccountForm setToken={setToken}/>
      </Route>
      


      <Route path = '/newpost'>
      <NewPost token ={token} />
      </Route>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
