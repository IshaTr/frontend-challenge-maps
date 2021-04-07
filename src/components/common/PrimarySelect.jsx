import React from 'react'
import styled from 'styled-components'

import ArrowIcon from '../../images/chevron-down.svg'

const StandardSelect = styled.select`
  display: block;
  height: 40px;
  width: 70%;
  padding: 0 2rem 0 1rem;
  font-size: 16px;
  color: #555;
  border: 1px solid #888;
  border-radius: 8px;
  background-color: transparent;
  background-image: ${`url(${ArrowIcon})`};
  background-repeat: no-repeat;
  background-size: 18px 100%;
  background-position: right 8px top 12px;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  text-transform: capitalize;
  margin-left: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const PrimarySelect = ({ options, handleClick, value }) => (
  <StandardSelect
    data-testid="primary-select"
    onChange={(e) => handleClick(options[e.target.value])}
    value={value}
  >
    {Object.entries(options).map(([option, value]) => {
      return (
        <option data-testid="selected-option" key={option}>
          {option}
        </option>
      )
    })}
  </StandardSelect>
)

export default PrimarySelect
