import { put } from 'redux-saga/effects'
import stubTag from '../../stub/tags/getTags.json';
import { TAGGING_IMAGE_SUCCESS } from '../../constants/actionTypes.js';


function* taggingImage(action) {
  const tags = stubTag;
  yield put({
      type: TAGGING_IMAGE_SUCCESS,
      payload: {
        tags,
      }
  });
}



export { taggingImage }
