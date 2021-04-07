import React from 'react'
import styled from 'styled-components'

import PrimarySelect from './common/PrimarySelect'
import Flex from './common/Flex'

import { filterOptions } from '../utils/helper'

const Wrapper = styled(Flex)`
  align-items: center;
  height: 5rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  padding-left: 3rem;
  padding-right: 3rem;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  width: 95%;
`

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 0.5rem;
`

const ContentContainer = styled(Flex)``

const Header = ({ addFilter }) => {
  const addNewFilter = (filter) => {
    addFilter(filter)
  }

  return (
    <Wrapper data-testid="header" alignItems="center" justify="space-between">
      <ContentContainer>
        <Logo data-testid="logo" src="/favicon.png" alt="logo" />
        <h1>Yelp Vimcar</h1>
      </ContentContainer>
      <ContentContainer alignItems="center" justify="space-between" width="20%">
        <h5>Categories</h5>
        <PrimarySelect options={filterOptions} handleClick={addNewFilter} />
      </ContentContainer>
    </Wrapper>
  )
}

export default Header
