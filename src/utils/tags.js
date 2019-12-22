//brak dostempu do theme przez props
import React from "react"
import styled from "styled-components"
import { theme } from "./theme"

const HMixin = props => `
font-family: ${theme.font.firstFont};
color:${theme.colors.primary};
opacity: 0.5;

`
export const H1 = styled.h1`
  ${HMixin}
  font-size:65px;
`
export const H2 = styled.h2`
  font-size: 65px;
  ${HMixin}
`
export const H3 = styled.h3`
  font-size: 65px;
  ${HMixin}
`
export const H4 = styled.h4`
  font-size: 65px;
  ${HMixin}
`
export const H5 = styled.h5`
  font-size: 65px;
  ${HMixin}
`
export const H6 = styled.h6`
  font-size: 65px;
  ${HMixin}
`

export const P = styled.p`
${HMixin}
  font-size: ${({ small, lead }) =>
    small
      ? theme.font.fontBase * theme.font.small
      : lead
      ? theme.font.fontBase * theme.font.lead
      : theme.font.fontBase}rem;
`
