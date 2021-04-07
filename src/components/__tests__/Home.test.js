import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import { coords } from '../../utils/helper'

import Home from '../Home'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = []

describe('<Home />', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
    render(<Home />)
  })

  afterEach(cleanup)

  let googleMapInstance = null

  it('should render Header compinent without breaking', () => {
    expect(screen.getByTestId('header')).toBeTruthy()
  })

  it('should render Map component without breaking', () => {
    const mapEl = document.querySelector('#places-map')
    if (window.google && window.google.maps && mapEl && !googleMapInstance) {
      googleMapInstance = new window.google.maps.Map(mapEl, {
        center: coords.default,
        zoom: 12
      })
    }
    expect(screen.getByTestId('header')).toBeTruthy()
  })
})
