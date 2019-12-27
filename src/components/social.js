import React from "react"

import styled from "styled-components"

const Social = props => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="mailto:maksymilian.c.wilk@gmail.com">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 30 30"
            >
              <path
                d="M318.031,254.969L490.531,448H21.453l172.5-193.031L256,309.25L318.031,254.969z M487.688,64H24.297L256,266.75L487.688,64z
	 M342.125,233.906L512,424V85.25L342.125,233.906z M0,85.25V424l169.859-190.125L0,85.25z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 50 50"
              enable-background="new 0 0 50 50"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#181616"
                d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
              />
            </svg>
          </a>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 25 30"
            enable-background="new 0 0 30 30"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Social
//${({ theme }) => theme.container}
const Wrapper = styled.div`
  a {
    color: #fff;
  }
  path {
    fill: hsl(0, 0%, 100%);
  }
  li {
    margin: 10px 0 10px;
    ${({ theme }) => theme.flexCenter}
  }
`
