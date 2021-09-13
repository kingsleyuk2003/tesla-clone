import { Fade } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MyFade from  "react-reveal/Fade";

const Section = ({ description, title, backgroundImg }) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <MyFade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </MyFade>
      <Buttons>
        <MyFade bottom>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </MyFade>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  background-image: ${(props) => `url("/images/${props.backgroundImg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  alight-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const LeftButton = styled.a`
 background-color: rgba(23, 26, 32, 0.8);
 height : 40px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity : 0.85;
 text-transform: uppercase;
 font-size; 12px;
 cursor: pointer;
 margin: 8px;
 :hover{
   opacity: 1;
      
 }

`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
