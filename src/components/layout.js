import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import styled from "styled-components"
import { theme } from "../utils/theme"
import Transition from "../utils/transition"
/* 
import Header from "./header"
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

const Layout = ({ children, location }) =>
{
  const [showSideDrawer, setSideDrawer] = React.useState(false)

  const sideDrawerToggleHandler = () =>
  {
    setSideDrawer(!showSideDrawer)
  }

  const sideDrawerClose = () =>
  {
    setSideDrawer(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <StyleGlobal />
        {/*   <Header />
        <p onClick={() => setSideDrawer(!showSideDrawer)}>ddsd</p>
        <SideDrawer open={showSideDrawer} closeMenu={sideDrawerClose} />
        <Backdrop show={showSideDrawer} closeMenu={sideDrawerClose} />
     
        <Footer /> */}

        <Transition location={location}>
          <Main>
            <section>{children}</section>

          </Main>
        </Transition>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  transition: 0.3s ease-in-out;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: calc(72% - 1em) calc(28% - 1.5em);
    grid-column-gap: 2.5em;
  }
`

export default Layout
