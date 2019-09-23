import { call, takeEvery } from 'redux-saga/effects'
import * as createTagService from '../../services/addContent/createTagService';
import * as deleteTagService from '../../services/addContent/deleteTagService';
import * as recognitionService from '../../services/addContent/recognitionService';
import { REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, REQUEST_DELETE_TAG_ADD_CONTENT_MODAL, REQUEST_RECOGNITION_ADD_CONTENT_MODAL } from '../../constants/actionTypes';

function* createTag() {
    yield call(createTagService.run);
}

function* deleteTag(action) {
    yield call(deleteTagService.run, action);
}

function* recognition() {
    yield call(recognitionService.run);
}

export default function* () {
    yield takeEvery(REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, createTag)
    yield takeEvery(REQUEST_DELETE_TAG_ADD_CONTENT_MODAL, deleteTag)
    yield takeEvery(REQUEST_RECOGNITION_ADD_CONTENT_MODAL, recognition)
}