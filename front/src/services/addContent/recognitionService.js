import { select, put } from 'redux-saga/effects'
import { COMPLETE_RECOGNITION_ADD_CONTENT_MODAL, FAIL_RECOGNITION_ADD_CONTENT_MODAL } from '../../constants/actionTypes';
import { isExpectString } from '../../constants/functions';
import stubGetTags from '../../stub/tags/getTags.json';

function* run() {
  const state = yield select();
  const { data, tags } = state.addContent;
  try {
    if (!isExpectString(data)) throw new Error();
    /** ここにurlをたたく処理を書く */
    const response = stubGetTags;
    const nextTags = tags;
    response.tags.forEach((tag) =>{
      nextTags.push(tag.description);
    });
    yield put({
      type: COMPLETE_RECOGNITION_ADD_CONTENT_MODAL,
      payload: {
        ...state.addContent,
        tags: nextTags,
      }
    });
  } catch (e) {
    yield put({
      type: FAIL_RECOGNITION_ADD_CONTENT_MODAL,
      payload: {
        ...state.addContent,
      }
    });
  }

}

export { run }
