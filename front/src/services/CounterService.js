import { select, put } from 'redux-saga/effects'
import { INCREMENT_SUCCESS } from '../constants/actionTypes';

export function* nextCount(action) {
  const currentState = yield select();
  yield put({
    type: INCREMENT_SUCCESS,
    action: {
      payload: 'put success'
    }
  })
}

