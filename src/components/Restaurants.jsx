import React from 'react'
import styled from 'styled-components'

import Flex from './common/Flex'

const MainWrapper = styled(Flex)`
  flex-wrap: wrap;
`

const Card = styled.div`
  transition: 0.3s;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 250px;
  min-height: 350px;
  margin: 12px;
  cursor: pointer;
  background: #fafafa;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #fff;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`

const Image = styled.div`
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const Container = styled.div`
  padding: 2px 16px;
  font-size: 14px;

  a {
    text-decoration: none;
    color: #888;
    underline: none;
    font-size: 16px;
  }
`

const Restaurants = ({ restaurants }) => (
  <MainWrapper data-testid="restaurants" justify="center">
    {restaurants.map((business, index) => (
      <Card data-testid={`card-${index}`} key={business.id}>
        <Image src={business.image_url} />
        <Container>
          <h4>
            <a href={business.url}>{business.name}</a>
          </h4>
          {business.location && business.location.display_address && (
            <p>
              {business.location.display_address[0]}
              <br />
              {business.location.display_address[1]}
            </p>
          )}
          <span>{business.display_phone}</span>
        </Container>
      </Card>
    ))}
  </MainWrapper>
)

export default Restaurants
