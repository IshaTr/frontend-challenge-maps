import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from './types'

import { fetchRestaurants } from './requests'

function* fetchRestaurantsSaga(action) {
  try {
    const response = yield call(fetchRestaurants, action.payload)
    const {
      data: { businesses, region }
    } = response

    yield put({
      type: types.FETCH_RESTAURANTS_SUCCESS,
      payload: businesses || []
    })

    yield put({
      type: types.SET_CENTER_REGION,
      payload: region.center
    })
  } catch (error) {
    yield put({
      type: types.FETCH_RESTAURANTS_ERROR,
      payload: error.message
    })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(types.FETCH_RESTAURANTS_REQUEST, fetchRestaurantsSaga)
  ])
}
