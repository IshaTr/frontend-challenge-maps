import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'

import Header from '../Header'

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />)
  })

  afterEach(cleanup)

  it('should render Header without breaking', () => {
    expect(screen.getByTestId('header')).toBeTruthy()
  })

  it('should render Header text', () => {
    expect(screen.findByText('Yelp Vimcar')).toBeTruthy()
  })

  it('should render Header Logo', () => {
    expect(screen.getByTestId('logo')).toBeTruthy()
  })

  it('should render select filter', () => {
    expect(screen.getByTestId('primary-select')).toBeTruthy()
  })
})
