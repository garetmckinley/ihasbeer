import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'hedron'

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const steps = 10
const size = 60

const glitchAnim = keyframes`
  ${[...Array(steps)].map(
    (f, i) =>
      `${i * (100 / steps)}% {
      clip: rect(${randInt(0, size)}px, 9999px, ${randInt(0, size)}px, 0);
    }`
  )}
`

const glitchAnim2 = keyframes`
  ${[...Array(steps)].map(
    (f, i) =>
      `${i * (100 / steps)}% {
      clip: rect(${randInt(0, size)}px, 9999px, ${randInt(0, size)}px, 0);
    }`
  )}
`

const Wrapper = styled(Box)`
  padding-bottom: 0;
`

const Glitch = styled.div`
  border-bottom: 4px solid #000;
  color:#000;
  font-family: monospace;
  font-size: ${size}px;
  position:relative;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:after{
    animation: ${glitchAnim} 2s infinite linear alternate-reverse;
    background:#fff;
    clip:rect(0,900px,0,0); 
    color:#000;
    content:attr(data-text);
    left:2px;
    overflow:hidden;
    pointer-events: none;
    position:absolute;
    text-shadow:-1px 0 red;
    top:0;
  }

  &:before{
    animation: ${glitchAnim2} 3s infinite linear alternate-reverse;
    background:#fff;
    clip:rect(0,900px,0,0); 
    color:#000;
    content:attr(data-text);
    left:-2px;
    overflow:hidden;
    pointer-events: none;
    position:absolute;
    text-shadow:1px 0 blue; 
    top:0;
  }
`

const Header = ({ glitch, children, ...props }) =>
  <Wrapper>
    <Glitch class="glitch" data-text={glitch} {...props}>
      <a href="/">{children}</a>
    </Glitch>
  </Wrapper>

export default Header
