import React from "react";

const Home = ({user, token}) => {
  return (
    <>
      <h1>Stranger's Things</h1>
      {
        token ? <div>
        You are logged in as {user.username}
      </div> : 'Hi friend :P'
      } 
    </>
  );
};

export default Home;
