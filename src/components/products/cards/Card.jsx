import React from 'react'
import { ShoppingCartRounded } from '@mui/icons-material'
import { productsList } from '../../../data/productsData'
import {
  Container,
  ProductCard,
  ProductImage,
  Circle,
  Image,
  IconContainer,
  Icon,
  Category,
  ProductInfo,
} from './cardStyles'

const Card = () => {
  
  return (
    <Container>
      {productsList.map((product) => {
        return (
          <ProductCard key={product.id}>
            <ProductImage>
              <Circle />
              <Image src={product.img} />
              <IconContainer>
                <Icon>
                  <ShoppingCartRounded />
                </Icon>
              </IconContainer>
            </ProductImage>
            <ProductInfo>
              <h5>{product.title}</h5>
              <Category>{product.category}</Category>
              <p>{product.price} €</p>
            </ProductInfo>
          </ProductCard>
        )
      })}
    </Container>
  )
}

export default Card
