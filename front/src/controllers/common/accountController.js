import { call, takeEvery } from 'redux-saga/effects'
import {loadAccountInfo} from '../../services/common/accountService';
import { REQUEST_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';

function* loadAccount(action) {
  yield call(loadAccountInfo, action);
}

export default function* () {
  yield takeEvery(REQUEST_LOAD_ITEM_CONTENT_LIST, loadAccount)
}