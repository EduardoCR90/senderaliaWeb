import styled from 'styled-components'
import { breakpoint } from '../../responsive/breakpoints'

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`

export const Container = styled.div`
  position: absolute;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  background: #fef5ed;
  z-index: 6;
  font-size: 16px;
  width: 95%;

  ${breakpoint('lg')`
    width: 50vw;
    height: 50vh:
    font-size: 20px;
  `}
`

export const ModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
  border-bottom: 1px solid #adc2a9;
`

export const ModalTitle = styled.h3`
  font-family: 'Princess Sofia' !important;
  font-size: xx-large;
  color: #99a799;

  ${breakpoint('lg')`
    font-size: xxx-large;
  `}
`

export const CloseButton = styled.button`
  position: absolute;
  padding: 0px;
  top: 1%;
  right: 3%;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: darkred;

  &:hover {
    background: #99a799; 
  }
`

export const AddButton = styled.button`
  background: #adc2a9;
  border-radius: 5px;
  padding: 3% 7%;
  margin: 1%;
  border: 1px solid gray;

  &:active {
    color: #fef5ed;
    transition: .1s all ease;
  }
`

export const SubtractButton = styled.button`
  background: #FFBCBC;
  border-radius: 5px;
  padding: 3% 7%;
  margin: 1%;
  border: 1px solid gray;

  &:active {
    color: #fef5ed;
    transition: .1s all ease;
  }
`

export const TotalAmount = styled.p`
  padding: 1%;
  width: 30%;
  font-weight: 500;
  text-align: center;
`

export const ProductRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 1%;
  margin: 0%;
  ;
`

export const ProductTitle = styled.h5`
  font-weight: 500;
  color: black;
  padding: 1% 0%;
`

export const ProductPrice = styled.p`
  font-weight: 300;
  font-size: 15px;
`

export const InfoColumn = styled.div`
  flex-direction: column;
  flex: 1;
`

export const AmountColumn = styled.div`
  flex-direction: row;
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`

export const LastRow = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  font-size: 16px;
  padding: 1%;

`

export const DropCartButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background: #FFBCBC;
  padding: 1% 2%;
  flex: 1;
  font-weight: 500;

  &:active {
    color: #99a799;
  }

  ${breakpoint('lg')`
    flex: 0.3;
  `}
`

export const BuyButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background: #adc2a9;
  padding: 1% 2%;
  flex: 1;
  margin-left: 1%;
  font-weight: 500;

  &:active {
    color: #99a799;
    transition: .1s all ease;
  }

  ${breakpoint('lg')`
    flex: 0.3;
  `}
`

export const FinalResult = styled.p`
  padding: 1%;
  height: 60px;
  flex: .75;
  display: flex;
`
