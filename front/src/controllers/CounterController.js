import { call, takeEvery } from 'redux-saga/effects'
// import { requestNextCount, receiveNextCount } from './index'
// import { nextCountAPI } from './API'
import { INCREMENT } from "../constants/actionTypes";
import {nextCount} from '../services/CounterService';

function* next(action) {
  console.log('==============in controller');
  yield call(nextCount, action);
}



export default function* rootSaga() {
  yield takeEvery(INCREMENT, next)
}