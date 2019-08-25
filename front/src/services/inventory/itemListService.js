import { select, put } from 'redux-saga/effects'
import { COMPLETE_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';
import stubImageList from '../../stub/imageList';


function* loadItemList(action) {
  console.log('==============in service');
  const list = stubImageList;
  yield put({
    type: COMPLETE_LOAD_ITEM_CONTENT_LIST,
    action: {
      payload: list
    }
  })
}

export { loadItemList }

