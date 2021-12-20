import styled from 'styled-components'
import { breakpoint } from '../../../responsive/breakpoints'

export const Container = styled.div`
  height: 60px;
  background-color: #fef5ed;
  color: black;
  border-bottom: 1px solid #adc2a9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Items = styled.div`
  display: ${(props) => (props.setValue ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100px;
  background: #fef5ed;
  padding: 10px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #adc2a9;
  
  ${breakpoint('lg')`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: initial;
    top: initial;
    border-bottom: none;
  `}
`

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  margin: 1%;
  padding-left: 4%;

  h1 {
    font-family: 'Princess Sofia';
    margin-bottom: 0;
  }

  ${breakpoint('lg')`
    padding-left: 1%;
  `}
`

export const MenuItem = styled.a`
  padding: 5px;
  text-decoration: none;
  color: #99a799;
  font-weight: bold;
  border-bottom: 1px solid rgba(211, 228, 205, 0.5);

  &:hover {
    color: #adc2a9;
    transition: 0.3s all ease;
  }

  ${breakpoint('lg')`
    font-size: 18px;
    cursor: pointer;
    color: black;
    font-weight: initial;
    text-align: center;
    border-bottom: none;
    padding-left: 40px;
    padding-right: 1%;
  `}
`

export const Burger = styled.div`
  padding-right: 4%;
  &:active {
    color: #99a799;
  }

  ${breakpoint('lg')`
    display: none;
  `}
`
