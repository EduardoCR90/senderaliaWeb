import styled from 'styled-components'
import { breakpoint } from '../../../responsive/breakpoints'

export const Container = styled.div`
  height: 40px;
  width: 100%;
  background: #99a799;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1%;

  ${breakpoint('lg')`
    font-size: 20px;
  `}
`

export const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 0;
  padding-left: 5px;
  margin-left: 10px;
  background-color: #fef5ed;

  input:focus {
    outline: none;
  }
`

export const Input = styled.input`
  background-color: #fef5ed;
  padding: 5px;
  border: none;
  text-align: start;
  width: 100%;
  justify-content: center;
  padding: 0% 1%;
  margin: 0%;
`

export const MenuItem = styled.div`
  display: none;

  ${breakpoint('lg')`
    display: block;
    cursor: pointer;
    margin: 0% .5%;
  `}
`

export const IconItem = styled.div`
  cursor: pointer;
  color: black;
  margin: 0% 1%;

  &:active {
    color: #99a799;
    transition: .1s all ease;
  }
`
