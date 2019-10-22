import { call, takeEvery } from 'redux-saga/effects'
import * as createTagService from '../../services/addContent/createTagService';
import * as deleteTagService from '../../services/addContent/deleteTagService';
import * as recognitionService from '../../services/addContent/recognitionService';
import * as saveService from '../../services/addContent/saveService';
import { REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, REQUEST_DELETE_TAG_ADD_CONTENT_MODAL, REQUEST_RECOGNITION_ADD_CONTENT_MODAL, REQUEST_SAVE_ADD_CONTENT } from '../../constants/actionTypes';

function* createTag() {
    yield call(createTagService.run);
}

function* deleteTag(action) {
    yield call(deleteTagService.run, action);
}

function* recognition() {
    yield call(recognitionService.run);
}

function* save() {
    yield call(saveService.run);
}

export default function* () {
    yield takeEvery(REQUEST_CREATE_TAG_ADD_CONTENT_MODAL, createTag)
    yield takeEvery(REQUEST_DELETE_TAG_ADD_CONTENT_MODAL, deleteTag)
    yield takeEvery(REQUEST_RECOGNITION_ADD_CONTENT_MODAL, recognition)
    yield takeEvery(REQUEST_SAVE_ADD_CONTENT, save)
}