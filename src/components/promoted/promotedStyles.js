import styled from 'styled-components'
import { breakpoint } from '../../responsive/breakpoints'

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #adc2a9;

  ${breakpoint('lg')`
    flex-direction: row;
  `}
`

export const EventTitle = styled.h4`
  font-size: large;
`

export const ImgContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`

export const PromotedImage = styled.img`
  width: 300px;
  height: 200px;
  margin: 10px;
`

export const Left = styled.div`
  flex: 0.5;
  padding: 20px;
`

export const Section = styled.div`
  flex: 1;
  padding: 20px;
  border-top: 1px solid rgba(211, 228, 205, 0.5);
  text-align: justify;

  ${breakpoint('lg')`
    border-left: 1px solid rgba(211, 228, 205, 0.5);
  `}
`

export const Title = styled.h3`
  padding-bottom: 10px;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuLinks = styled.a`
  margin-bottom: 10px;
  color: black;
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: #fef5ed;
    transition: 0.3s all ease;
  }

  &:active {
    color: #fef5ed;
    transition: 0.3s all ease;
  }
`
