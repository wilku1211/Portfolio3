import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import Nav from "./nav"

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Menu>
        <Link to="/" className="logo">
          {" "}
          logo
        </Link>
        <Nav />
      </Menu>

      {children}
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
overflow: hidden;
${({ theme }) => theme.breakpoints.xl}{

:hover [class*="hero__Hero__Image"] {
      ${({ theme }) => theme.mixinTransition({ duration: "1s" })}
      transform: rotate3d(1, 1, 1, 0deg) scale(1) translateY(0%);
    }
  }
}

`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${({ theme }) => theme.container}
  .logo {
    z-index: 101;
  }
`
