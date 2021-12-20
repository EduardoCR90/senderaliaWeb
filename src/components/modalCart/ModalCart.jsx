import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { productsList } from '../../data/productsData'
import {
  Overlay,
  Container,
  ModalTitleContainer,
  ModalTitle,
  CloseButton,
  ProductRow,
  TotalAmount,
  AddButton,
  SubtractButton,
  ProductTitle,
  ProductPrice,
  InfoColumn,
  AmountColumn,
  LastRow,
  FinalResult,
  DropCartButton,
  BuyButton,
} from './modalCartStyles'

const ModalCart = ({ closeModal, modalIsOpen }) => {
  const [listProductState, setlistProductState] = useState(productsList)

  const dropCart = () => {
    localStorage.clear()
    closeModal(false)
  }

  const addItem = (index) => {
    let tempArray = [...listProductState]
    tempArray[index].onCart++
    setlistProductState(tempArray)
  }

  const removeItem = (index) => {
    let tempArray = [...listProductState]
    tempArray[index].onCart--
    tempArray[index].onCart < 0 ? (tempArray[index].onCart = 0) : setlistProductState(tempArray)
  }

  return (
    <>
      {modalIsOpen && (
        <Overlay>
          <Container>
            <ModalTitleContainer>
              <ModalTitle>Shopping Cart</ModalTitle>
            </ModalTitleContainer>
            <CloseButton onClick={closeModal}>
              <CloseRoundedIcon style={{ fontSize: '35px' }} />
            </CloseButton>
            {productsList.map((product, index) => {
              return (
                <ProductRow key={product.id}>
                  <InfoColumn>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.price} €</ProductPrice>
                  </InfoColumn>
                  <AmountColumn>
                    <SubtractButton onClick={() => removeItem(index)}>
                    <RemoveIcon/>
                    </SubtractButton>
                    {listProductState[index].onCart}
                    <AddButton onClick={() => addItem(index)}>
                    <AddIcon />
                    </AddButton>
                  </AmountColumn>

                  <TotalAmount>Price: {product.onCart * product.price}€</TotalAmount>
                </ProductRow>
              )
            })}
            <LastRow>
              <FinalResult></FinalResult>
              <DropCartButton onClick={dropCart}>Back</DropCartButton>
              <BuyButton>Buy</BuyButton>
            </LastRow>
          </Container>
        </Overlay>
      )}
    </>
  )
}

export default ModalCart
