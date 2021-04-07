import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'

import PrimarySelect from '../common/PrimarySelect'

import { filterOptions } from '../../utils/helper'

describe('<PrimarySelect />', () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    render(<PrimarySelect handleClick={handleClick} options={filterOptions} />)
  })

  afterEach(cleanup)

  it('should render select without breaking', () => {
    expect(screen.getByTestId('primary-select')).toBeTruthy()
  })

  it('should call the filter function onChange', () => {
    const select = screen.getByTestId('primary-select')

    fireEvent.change(select, { target: { value: 2 } })
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
