import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [burgerstatus, setburgerStatus] = useState();

  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="Logo" />
      </a>

      <Menu>
      <a href="#">model-s</a>
<a href="#">model-3</a>
<a href="#">model-x</a>
<a href="#">model-y</a>
      </Menu>

      <RigtMenu>
      <a  href="#">shop</a>
      <a  href="#">tesla  account</a>
      <CustomMENU>


     
    <a herf="#" onClick={()=>setburgerStatus(true)}  ><i class="fa-solid fa-ellipsis-vertical" style={{color:'black'}}></i></a>

      </CustomMENU>
      </RigtMenu>
      <BurgerNav show={burgerstatus}>
      <CloseWrapper><CloseNav ><button onClick={()=>setburgerStatus(false)}><i className="fa-solid fa-xmark" style={{color:'black'}}></i></button>  </CloseNav></CloseWrapper>
  <li><a here='#'>Existing Inventory</a></li>
  <li><a here='#'>Used Inventory</a></li>
  <li><a here='#'>  Trade - in</a></li>
  <li><a here='#'>Cyber-truck</a></li>
  <li><a here='#'>Roadaster</a></li>
  <li><a here='#'>Semi</a></li>
  <li><a here='#'>Charging</a></li>
  <li><a here='#'>Test Drive</a></li>
  <li><a here='#'>Power</a></li>
  <li><a here='#'>Shop</a></li>

</BurgerNav>

    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index: 1;

  @keyframes animateDown {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(50px);
  }
  60% {
    transform: translateY(5px);
  }
}
`;

const Menu = styled.div`
  display: flex;
  gap: 25px; 
  justify-content: center;
  flex:1;
  a{
    font-weight:600;
    text-transform:uppercase;
     padding:0 10px;
     flex-wrap:nowrap

  }
  @media (max-width: 768px) {
    display:none;
  }
  
  `

const RigtMenu=styled.div` 
display:flex;
a{
    font-weight:600;
    text-transform:uppercase;
margin:10px
  }
  `

  const CustomMENU =styled.div`
  cursor: pointer;
  `

  const BurgerNav =styled.div`
  position :fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:whitesmoke;
  width:300px;
  z-index:16;
  list-style:  none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${ props=>
  props.show ? 'translateX(0)' : 'translateX(100%)'} ;
  transition: transform 0.2s ;
  li{
    padding: 15px 0px;
    border-bottom:1px solid rgba(0,0,0,0.4);

    a{
      font-weight:700;
    }
  }


  `

  const CloseNav = styled.div`
  cursor: pointer;
  
  `

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end
`