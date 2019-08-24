import { select, put } from 'redux-saga/effects'
import { COMPLETE_LOAD_ITEM_CONTENT_LIST } from '../../constants/actionTypes';

function stubImageList() {
  return [
    {
      "isDeleted": false,
      "isPublic": false,
      "tag": "cap",
      "itemId": '111222#2017-03-22T00:00:00.000Z',
      "data": "../../stub/image/kamakura.JPG",
      "shop": {
        "name": "UNICRO",
        "url": "https://www.uniqlo.com/jp/"
      },
    },
    {
      "isDeleted": false,
      "isPublic": true,
      "tag": "pants",
      "itemId": '3334444#2017-08-22T00:00:00.000Z',
      "data": "../../stub/image/kouriAiland.JPG",
      "shop": {
        "name": "SHIPS",
        "url": "https://www.shipsltd.co.jp/"
      },
    },
    {
      "isDeleted": false,
      "isPublic": true,
      "tag": "shirt",
      "itemId": '555666#2017-03-22T00:00:00.000Z',
      "data": "../../stub/image/nemofira.JPG",
      "shop": {
        "name": "BEAMS",
        "url": "https://www.beams.co.jp/"
      },
    }
  ]
}


function* loadItemList(action) {
  console.log('==============in service');
  const list = stubImageList();
  yield put({
    type: COMPLETE_LOAD_ITEM_CONTENT_LIST,
    action: {
      payload: list
    }
  })
}

export { loadItemList }

