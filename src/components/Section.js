import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,description, ltftbtnText,rightbtnText,backgroundimg}) {
  return (


    
<Warp bgImage={backgroundimg}>
  <Fade bottom>
  <ItemText>
    <h1>{title}</h1>
    <p>{description}</p>
    </ItemText>
  </Fade>

    <Buttons>

      <Fade bottom>
    <ButtonGroup>
      <LeftButton>
        {ltftbtnText}
      </LeftButton>

      {rightbtnText && <RightButton> 
        {rightbtnText}
      </RightButton>}
     
    </ButtonGroup>

    </Fade>
    <DownArrow src ="/images/down-arrow.svg"/>
    </Buttons>
</Warp>
    )
}

export default Section

const Warp = styled.div`
z-index:10;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Fix: Corrected property name */
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical
  align-items: center; // horizontal
  background-image:${props =>`url("/images/${props.bgImage}")`}
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
  }
`;

const LeftButton = styled.button`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 100px;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer; 
  margin:8px;
`;

const RightButton = styled(LeftButton)`
background-color:white;
opacity: 0.6;
color:black;`


 const  DownArrow =styled.img`
 margin-top:20px;
 margin-left:50%;
 height:40px;
 animation:animateDown infinite 1.5s;

 `
 const Buttons=styled.div``