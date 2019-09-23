import { select, put } from 'redux-saga/effects'
import { COMPLETE_CREATE_TAG_ADD_CONTENT_MODAL, FAIL_CREATE_TAG_ADD_CONTENT_MODAL } from '../../constants/actionTypes';

function canCreateTag(candidate) {
  if(!candidate) return false;
  if(candidate === '') return false;

  return true;
}


function* run() {
  const state = yield select();
  const { candidate, tags } = state.addContent;
  try {
    if(!canCreateTag(candidate)) throw new Error();
    const nextTags = tags;
    nextTags.push(candidate);
    yield put({
      type: COMPLETE_CREATE_TAG_ADD_CONTENT_MODAL,
      payload: {
        ...state.addContent,
        candidate: '',
        tags: nextTags,
      }
    });

  } catch (e) {
    yield put({
      type: FAIL_CREATE_TAG_ADD_CONTENT_MODAL,
      payload: {
        ...state.addContent,
      }
    });
  }
}

export { run }
