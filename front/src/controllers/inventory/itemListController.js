import { call, takeEvery } from 'redux-saga/effects'
import {loadItemList} from '../../services/inventory/itemListService';
import * as changeListService from '../../services/inventory/changeListService';
import { REQUEST_LOAD_ITEM_CONTENT_LIST, REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST } from '../../constants/actionTypes';

function* loadItem(action) {
  yield call(loadItemList, action);
}

function* changeList(action) {
  yield call(changeListService.run, action);
}

export default function* () {
  yield takeEvery(REQUEST_LOAD_ITEM_CONTENT_LIST, loadItem)
  yield takeEvery(REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST, changeList)
}