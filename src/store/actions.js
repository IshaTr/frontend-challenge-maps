import * as types from './types'

export const fetchRestaurants = (query) => ({
  type: types.FETCH_RESTAURANTS_REQUEST,
  payload: query
})
