// import React from "react";

// const Home = ({user, token}) => {
//   return (
//     <>
//       <h1>Stranger's Things</h1>
//       {
//         token ? <div>
//         You are logged in as {user.username}
//       </div> : 'Hi friend :P'
//       } 
//     </>
//   );
// };

// export default Home;

import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: gray;
`;

const Home = ({ user, token }) => {
  return (
    <>
      <Title>
        Stranger's Things<br/><br/>
        {
          token ? <span>You are logged in as {user.username}</span> : 'Hi friend (:'
        }
      </Title>
    </>
  );
};

export default Home;