import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import MapBox from '../MapBox'

import { coords } from '../../utils/helper'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = []

describe('<MapBox />', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
    render(<MapBox />)
  })

  afterEach(cleanup)

  let googleMapInstance = null
  it('should render map without breaking', () => {
    const mapEl = document.querySelector('#places-map')
    if (window.google && window.google.maps && mapEl && !googleMapInstance) {
      googleMapInstance = new window.google.maps.Map(mapEl, {
        center: coords.default,
        zoom: 12
      })
    }
    expect(screen.getByTestId('places-map')).toBeTruthy()
  })
})
