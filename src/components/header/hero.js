import React from "react"
import styled, { keyframes } from "styled-components"
import image from "../../assets/images/1.jpg"
import { H1, P } from "../../utils/tags"
import Social from "../social"

const Hero = props => {
  return (
    <WrapperHero>
      <HeroImage />
      <H1>Hej jestem Maksymilan </H1>

      <Subtitile>
        <P>
          Poszukuję pracy jako
          <br /> Junior React Developer
        </P>
        <P>Sprawdz co potrafie</P>
      </Subtitile>

      <p>media</p>
      <p>odnosnik do sekcji I</p>
      <Social />
      <Arrow>
        <polygon
          class="arrow-bottom"
          points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
        />
      </Arrow>
      <Triangle>
        <div></div>
        <div></div>
      </Triangle>
    </WrapperHero>
  )
}

// animation: ${jumpingBuilder(30)} 30ms linear 0s infinite normal forwards;
function jumpingBuilder(procent) {
  const jumping = keyframes`
    0% {
      transform: translateY(0%);
    }
 
    100% {
      transform: translateY(${procent}%);
    }
  
  `
  return jumping
}

const WrapperHero = styled.section`
  perspective: 100px;
  position: relative;
  margin: -80px 0 0;
  width: 100%;
  height: 100vh;
  background-color: hsl(0, 0%, 6%);

  h1 {
    text-align: center;
    padding: 80px 0 0;
    margin: 0 10px 16px 0;

    font-size: 50px;
    text-align: center;
  }



  [class*="social__Wrapper"]{
    opacity: 0.5;
    position: absolute;
    right: 33px;
    bottom: 198px;

}
  }
`

const Subtitile = styled.div`
  transform: translateY(50px);
  line-height: 1.5;

  margin: 10px 30px 0 30px;
`
const Arrow = styled.svg`
  position: absolute;
  animation: ${jumpingBuilder(30)} 1s ease-in 0s infinite alternate none running;
  width: 75px;
  height: 65px;
  bottom: 19%;
  opacity: 0.5;
  right: 1%;
  polygon {
    transform: scale(0.5);
    fill: hsl(0, 0%, 100%);
    transition: all 0.2s ease-out;
  }
`

const HeroImage = styled.div`
  opacity: 0.3;
  width: 100vw;
  background: url(${image});
  background-repeat: no-repeat;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;

  transform: rotateX(0deg) rotateY(0deg) translateX(30%) translateY(91%)
    scale(1.7);

  ${({ theme }) => theme.breakpoints.xl} {
    background-size: cover;

    transform: rotateX(0deg) rotateY(5deg) translateX(-13%) translateY(27%)
      scale(0.5);
    /*   transform: rotate3d(1, 1, 1, -67deg) scale(0.8) translateY(100%); */
    ${({ theme }) => theme.mixinTransition({ duration: "0.5s" })}
  }
`
const Triangle = styled.div`
  height: 100px;

  div:nth-child(even) {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    border-bottom: 11vh solid hsl(0, 0%, 100%);
    border-right: 39vw solid hsla(0, 0%, 0%, 0);
  }
  div:nth-child(odd) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 0;
    border-bottom: 11vh solid hsl(0, 0%, 100%);
    border-left: 80vw solid hsla(0, 0%, 0%, 0);
  }
`

export default Hero
