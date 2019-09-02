import { call, takeEvery } from 'redux-saga/effects'
import * as editTagsService from '../../services/common/editTagsService';
import { TAGGING_IMAGE_REQUEST } from '../../constants/actionTypes';

function* tagging(action) {
  yield call(editTagsService.taggingImage, action);
}

export default function* () {
  yield takeEvery(TAGGING_IMAGE_REQUEST, tagging)
}