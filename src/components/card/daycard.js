import React from "react";
import styled from 'styled-components';
import { Image,Container } from 'semantic-ui-react'


const Cardimg = styled.img`
  width: 90%;
  margin: auto;
`;


const Cardinfo = ({imgurl, blurb}) => {
  return (
    <>
      {/* display h1 title*/}
      <Cardimg src={imgurl} alt="alttext" />
        
      

      <Container>
        <p> {blurb} </p>
      </Container> 
    </>
  );
};

export default Cardinfo;