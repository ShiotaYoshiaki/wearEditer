import { select, put } from 'redux-saga/effects'
import { COMPLETE_DELETE_TAG_ADD_CONTENT_MODAL } from '../../constants/actionTypes';

function* run(action) {
  const state = yield select();
  const { tags } = state.addContent;
  const deleteTag = action.payload;
  const noDeleteTags = tags.filter(tag => tag !== deleteTag);
  yield put({
    type: COMPLETE_DELETE_TAG_ADD_CONTENT_MODAL,
    payload: {
      ...state.addContent,
      tags: noDeleteTags,
    }
  });
}

export { run }
