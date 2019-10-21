import { select, put } from 'redux-saga/effects'
import { COMPLETE_SAVE_ADD_CONTENT, FAIL_SAVE_ADD_CONTENT } from '../../constants/actionTypes';

function* run(action) {
  try {
    // const state = yield select();
    // const { color, tags, data, part, shop } = state.addContent;
    // const param = {color, tags, data, part, shop};
    /** saveメソッドを追記 */
    yield put({
      type: COMPLETE_SAVE_ADD_CONTENT,
    });
  } catch (e) {
    yield put({
      type: FAIL_SAVE_ADD_CONTENT,
      message: e.message,
    })
  }
}

export { run }
