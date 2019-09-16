import { call, takeEvery } from 'redux-saga/effects'
import {loadItemList} from '../../services/inventory/itemListService';
import * as changeListService from '../../services/inventory/changeListService';
import * as clearEditService from '../../services/inventory/clearEditService';
import { REQUEST_LOAD_ITEM_CONTENT_LIST, REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST, REQUEST_CLEAR_EDIT_TAG_ITEM_LIST } from '../../constants/actionTypes';

function* loadItem(action) {
  yield call(loadItemList, action);
}

function* changeList(action) {
  yield call(changeListService.run, action);
}

function* clearEdit(action) {
  yield call(clearEditService.run, action);
}

export default function* () {
  yield takeEvery(REQUEST_LOAD_ITEM_CONTENT_LIST, loadItem)
  yield takeEvery(REQUEST_CHANGE_TO_DISPLAY_ITEM_LIST, changeList)
  yield takeEvery(REQUEST_CLEAR_EDIT_TAG_ITEM_LIST, clearEdit)
}