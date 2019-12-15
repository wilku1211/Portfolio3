import styled from "styled-components"
import { up, down, between, only } from 'styled-breakpoints';
//import {theme} from './theme';
//TODO: caøyfolder
export const Container = styled.div`
margin-left: auto;
margin-right: auto;
width: 50%;
${up('sm')} {
    width: 60%;
  }

  ${up('md')} {
    width: 70%;
  }

  ${up('lg')} {
    width: 80%;
  }

  ${up('xl')} {
    width: 90%;
  }
 
}
`
export const FlexCenter = styled.div`
display: flex;
justify-content: center;
height: ${({height})=>height};
align-items: center;
`


