import { select, put } from 'redux-saga/effects'
import { COMPLETE_ACCOUNT_INFO } from '../../constants/actionTypes';

function stubAccount() {
  return {
    "user_id": "000001",
    "account_name": "test user name",
    "tall": 175,
    "shoulder": "sloping",
    "account_image": "",
    "mail": "test@sample.co.jp",
    "country": "japan",
    "webSite": ["https://www.yahoo.co.jp"],
    "Introduction": "ここは自己紹介文、snsのものが自動的に入ってきたらいいな",
    "sns": {
      "twitter": {},
      "instagram": {},
      "line": {},
    }
  }
}


function* loadAccountInfo() {
  const accountInfo = stubAccount();
  yield put({
    type: COMPLETE_ACCOUNT_INFO,
    payload: accountInfo
  })
}


export { loadAccountInfo }
