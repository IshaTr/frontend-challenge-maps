import * as actions from '../actions'
import * as types from '../types'
describe('Actions', () => {
  it('fetchRestaurants', () => {
    const expectedAction = {
      type: types.FETCH_RESTAURANTS_REQUEST
    }

    expect(actions.fetchRestaurants()).toEqual(expectedAction)
  })
})
