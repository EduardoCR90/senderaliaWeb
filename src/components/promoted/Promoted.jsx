import React from 'react'
import {
  Container,
  PromotedImage,
  ImgContainer,
  Left,
  Section,
  Title,
  LinksContainer,
  MenuLinks,
  EventTitle,
} from './promotedStyles'

const Promoted = () => {
  return (
    <Container>
      <Left>
        <Title>Quick menu</Title>
        <LinksContainer>
          <MenuLinks>Home</MenuLinks>
          <MenuLinks>Events</MenuLinks>
          <MenuLinks>Services</MenuLinks>
          <MenuLinks>Discounts</MenuLinks>
        </LinksContainer>
      </Left>
      <Section>
        <Title>Next events</Title>
        <EventTitle>Christmas beach party</EventTitle>
        <p>
          The holiday season is the perfect time to get together with friends and family. With that in mind, we’d like to invite you to our Annual Christmas Party and Gift Exchange.
          It will take place on saturday 25 December in one of our favourites places in Tenerife: Benijo Beach, Anaga.
        </p>
        <EventTitle>Vulcano route</EventTitle>
        <p>
          This adventure is planned just for our hardcore clients who want to live an incredible experience with us!
          This trail has many inclines, steep hills, a long steady climb, slippery rocks and other difficult terrains which we love to share with you.
          Join us the next month! 
        </p>
      </Section>
      <Section>
        <Title>Coming soon...</Title>
        <ImgContainer>
          <PromotedImage src={'https://i.ibb.co/ZWzyTDK/Tungurahua-Volcano-eruption-at-night-with-snow-Ecuador.jpg'} />
          <PromotedImage src={'https://i.ibb.co/8zd45wD/volcano2.jpg'} />
        </ImgContainer>
      </Section>
    </Container>
  )
}

export default Promoted
