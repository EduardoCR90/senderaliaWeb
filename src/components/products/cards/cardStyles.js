import styled from 'styled-components'
import { breakpoint } from '../../../responsive/breakpoints'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 20px;
`

export const IconContainer = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

export const ProductCard = styled.div`
  width: 300px;
  border: 1px solid;
  margin-top: 10px;
  
  ${breakpoint('lg')`
    width: 400px;
    margin-bottom: 10px;
  `}
`

export const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${IconContainer} {
    opacity: 1;
  }
`

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #d3e4cd;
  opacity: 0.3;
  position: absolute;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;

  ${breakpoint('lg')`
    width: 400px;
  `}
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fef5ed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #adc2a9;
    border: 1px solid #d3e4cd;
    transform: scale(1.1);
  }
`

export const ProductInfo = styled.div`
  font-size: 1.15rem;
  padding: 20px;
  padding-bottom: 0;
`

export const Category = styled.p`
  color: #adc2a9;
  font-weight: bold;
`
