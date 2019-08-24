import { call, takeEvery } from 'redux-saga/effects'
import {loadItemList} from '../../services/inventory/itemListService';
import { REQUEST_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';

function* loadItem(action) {
  yield call(loadItemList, action);
}

export default function* () {
  yield takeEvery(REQUEST_LOAD_ITEM_CONTENT_LIST, loadItem)
}