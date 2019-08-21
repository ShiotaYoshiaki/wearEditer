import { call, takeEvery } from 'redux-saga/effects'
import { INCREMENT } from "../constants/actionTypes";
import { nextCount } from '../services/CounterService';

function* next(action) {
  console.log('------in controller-------');
  yield call(nextCount, action);
}



export default function* () {
  console.log('=============counterController=');
  yield takeEvery(INCREMENT, next)
}