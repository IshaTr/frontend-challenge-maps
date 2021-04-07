import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Header from './Header'
import MapBox from './MapBox'

import { fetchRestaurants } from '../store/actions'

import Flex from './common/Flex'

const Wrapper = styled(Flex)``

const Home = (props) => {
  const dispatch = useDispatch()

  // fetch restaurant list on mount
  useEffect(() => {
    dispatch(fetchRestaurants(''))
  }, [dispatch])

  const addFilter = (filter) => {
    dispatch(fetchRestaurants(filter))
  }

  return (
    <Wrapper direction="column" alignItems="center">
      <Header addFilter={addFilter} />
      <MapBox />
    </Wrapper>
  )
}

export default Home
