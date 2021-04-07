import React from 'react'
import { screen, render, cleanup } from '@testing-library/react'

import Restaurants from '../Restaurants'

const mockRestaurants = [
  {
    id: '8uBE9ZgfZOM2z_Rllw478Q',
    alias: 'stadtklause-berlin',
    name: 'Stadtklause',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/vqFLzToYyFfAoYKlBRq0jA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/stadtklause-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA',
    review_count: 172,
    categories: [
      {
        alias: 'german',
        title: 'German'
      }
    ],
    rating: 4.5,
    coordinates: {
      latitude: 52.504779,
      longitude: 13.380618
    },
    transactions: [],
    price: '€',
    location: {
      address1: 'Bernburger Str. 35',
      address2: '',
      address3: null,
      city: 'Berlin',
      zip_code: 10963,
      country: 'DE',
      state: 'BE',
      display_address: ['Bernburger Str. 35', '10963 Berlin', 'Germany']
    },
    phone: '+493051056381',
    display_phone: '+49 30 51056381',
    distance: 2205.244050414826
  },
  {
    id: '6BCLgz8j6j2em7XLLsXoow',
    alias: 'lorenz-adlon-esszimmer-berlin',
    name: 'Lorenz Adlon Esszimmer',
    image_url:
      'https://s3-media3.fl.yelpcdn.com/bphoto/8NRTmzoPTNXUC0I4QApzBA/o.jpg',
    is_closed: false,
    url:
      'https://www.yelp.com/biz/lorenz-adlon-esszimmer-berlin?adjust_creative=ors6zRuF6OV8AsDVv84wmA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ors6zRuF6OV8AsDVv84wmA',
    review_count: 67,
    categories: [
      {
        alias: 'modern_european',
        title: 'Modern European'
      }
    ],
    rating: 5,
    coordinates: {
      latitude: 52.516109,
      longitude: 13.380014
    },
    transactions: [],
    price: '€€€€',
    location: {
      address1: 'Unter den Linden 77',
      address2: '',
      address3: null,
      city: 'Berlin',
      zip_code: '10117',
      country: 'DE',
      state: 'BE',
      display_address: ['Unter den Linden 77', '10117 Berlin', 'Germany']
    },
    phone: '+493022611960',
    display_phone: '+49 30 22611960',
    distance: 1006.1679823868484
  }
]

describe('<Restaurants />', () => {
  beforeEach(() => {
    render(<Restaurants restaurants={mockRestaurants} />)
  })

  afterEach(cleanup)

  it('should render without breaking', () => {
    expect(screen.findByText('Stadtklause')).toBeTruthy()
  })

  it('should render 2 cards', () => {
    const card1 = screen.getByTestId('card-0')
    const card2 = screen.getByTestId('card-1')

    expect(card1).toBeTruthy()
    expect(card2).toBeTruthy()
  })
})
