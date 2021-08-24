import React from "react";

const Home = ({username}) => {
  return (
    <>
      <h1>Home</h1>
      {
        username ? <div>
        You are logged in as {username}
      </div> : ''
      } 
    </>
  );
};

export default Home;
