import { call, takeEvery } from 'redux-saga/effects'
import {loadItemList} from '../../services/inventory/itemListService';
import * as changeListService from '../../services/inventory/changeListService';
import * as clearEditService from '../../services/inventory/clearEditService';
import * as changeClearListService from '../../services/inventory/changeClearListService';

// function* clearChangeList(action) {
//   yield call(changeClearListService.run, action);
// }

export default function* () {
//   yield takeEvery(REQUEST_CLEAR_TO_DISPLAY_ITEM_LIST, clearChangeList)
}