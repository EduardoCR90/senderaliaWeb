import styled from 'styled-components'
import { breakpoint } from '../../responsive/breakpoints'

export const Container = styled.div`
  display: none;

  ${breakpoint('lg')`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    overflow: hidden;
  `}
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #adc2a9;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`

export const InfoContainer = styled.div`
  display: none;

  ${breakpoint('xxl')`
    flex: 1;
    display: flex;
    padding: 40px;
    text-align: center;
    place-content: center;
  `}
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};

  ${breakpoint('xxl')`
    justify-content: center;
  `}
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`
