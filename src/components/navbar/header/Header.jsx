import React, { useState } from 'react'
import { PersonRounded, Search, ShoppingCartOutlined } from '@mui/icons-material'
import ModalCart from '../../modalCart/ModalCart.jsx'
import { Container, MenuItem, SearchContainer, Input, IconItem } from './headerStyles.js'

const Header = () => {
  const [modalState, setModalState] = useState(false)

  return (
    <>
      <Container>
        <IconItem>
          <ShoppingCartOutlined onClick={() => setModalState(!modalState)} />
        </IconItem>
        <PersonRounded style={{ color: '#FEF5ED' }} />
        <MenuItem>My account</MenuItem>
        <SearchContainer>
          <Search style={{ color: 'grey' }} />
          <Input placeholder='Search' />
        </SearchContainer>
      </Container>
      {modalState && (
        <ModalCart closeModal={() => setModalState(false)} modalIsOpen={modalState}></ModalCart>
      )}
    </>
  )
}

export default Header
