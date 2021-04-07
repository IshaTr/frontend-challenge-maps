import * as types from './types'

import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        businesses: action.payload
      }

    case types.FETCH_RESTAURANTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case types.SET_CENTER_REGION:
      return {
        ...state,
        region: action.payload
      }

    default:
      return state
  }
}

export default reducer
