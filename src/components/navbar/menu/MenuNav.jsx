import React, { useState } from 'react'
import { Menu } from '@mui/icons-material'
import { Burger, Container, Logo, Items, MenuItem } from './menuNavStyles'

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Logo>
        <h1>Senderalia</h1>
      </Logo>
      <Items setValue={isOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Events</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>News</MenuItem>
        <MenuItem>Blog</MenuItem>
      </Items>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </Burger>
    </Container>
  )
}

export default MenuNav
