import React from "react"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const Nav = props => {
  const [open, setOpen] = React.useState(false)
  const StyleGlobal = createGlobalStyle`

body{
  overflow-x: hidden;
  overflow-y: hidden;
}


`

  return (
    <WrapperNav>
      {open && <StyleGlobal />}
      <Hamburger onClick={() => setOpen(!open)} open={open}>
        <span className="burger__box">
          <span className="burger__inner"></span>
        </span>
      </Hamburger>

      <List open={open}>
        <ul>
          <li>omnie</li>
          <li>wiedza</li>
          <li>projekty</li>
          <li>kontakt</li>
        </ul>
      </List>
    </WrapperNav>
  )
}

const mixin = props => `
position: absolute;
border:#FFFFFF 1px solid;
height: 1px;
`

const mixinTransition = props => `
transition-property: ${props ? props : "transform"};
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
`

const WrapperNav = styled.nav``
const List = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh; 
  left: 0;
  top: 0;
  background: hsl(0, 100%, 50%);
  z-index: 100;
  ${mixinTransition}
  transform: ${props =>
    props.open ? "translateY(0vh)" : "translateY(-110vh)"};
ul{

  ${({ theme }) => theme.flexCenter}
}
`

const Hamburger = styled.button`
:focus {
  outline: none;
}
position: relative;
z-Index: 101;
background-color: transparent;
border:0;
.burger__box{
  width: 29px;
  height: 14px;
  display: inline-block;
  position: relative;
  :hover .burger__inner::after{
    width:30px;
}
}
.burger__inner{
  ${mixin}
  top:50%;
  transition-property: border;
transition-duration: 0s;
transition-delay: 0.3s;
transition-timing-function: ease-in-out;

  border:${props => (props.open ? "0px" : "")};
  width:30px;
  left: 1;

  ::before, ::after{
    content:'';
    ${mixin}
    left: 0px;

  }
  ::before{
    ${mixinTransition}

    transform:${props => (props.open ? "translateY(10px) rotate(135deg)" : "")};
    top:-10px;
    width:30px;


  }
  ::after{
    
    top:8px;
    width:${props => (props.open ? "28px" : "20px")};;
    ${mixinTransition("width, transform ")}
    transform:${props =>
      props.open ? "translateY(-8px) rotate(-135deg)" : ""}; 

  }
}

}
}
`

export default Nav
