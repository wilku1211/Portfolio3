import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "../utils/theme"
import Transition from "../utils/transition"
import Header from "./header"
import Hero from "./header/hero"
/* 
import Footer from "./Footer"
import SideDrawer from "./SideDrawer"
import Backdrop from "./Backdrop" */

//TODO:style globalne
const StyleGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
*, *::after, *::before{box-sizing: border-box;}
body{
  font-family: 'Roboto', sans-serif;
margin:0;
padding:0;
}
`

const Layout = ({ children, location }) => {
  //const [showSideDrawer, setSideDrawer] = React.useState(false)

  /*   const sideDrawerToggleHandler = () => {
    setSideDrawer(!showSideDrawer)
  }

  const sideDrawerClose = () => {
    setSideDrawer(false)
  }
 */
  return (
    <ThemeProvider theme={theme}>
      <>
        <StyleGlobal />
        <Header>
          <Hero />
        </Header>

        {/*  
        <p onClick={() => setSideDrawer(!showSideDrawer)}>ddsd</p>
        <SideDrawer open={showSideDrawer} closeMenu={sideDrawerClose} />
        <Backdrop show={showSideDrawer} closeMenu={sideDrawerClose} />
     
        <Footer /> */}

        <Transition location={location}>
          <Main>{children}</Main>
        </Transition>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const Main = styled.main``

export default Layout
