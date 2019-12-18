import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import Nav from "./nav"

const Header = props => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        {" "}
        logo
      </Link>
      <Nav />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${({ theme }) => theme.container}
  .logo {
    z-index: 101;
  }
`
