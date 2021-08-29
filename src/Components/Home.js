import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: gray;
`;

const Home = ({ user, token }) => {
  return (
    <>
      <Title>
        Stranger's Things
        <br />
        <br />
        {token ? (
          <span>You are logged in as {user.username}</span>
        ) : (
          "Hi friend (:"
        )}
      </Title>
    </>
  );
};

export default Home;
