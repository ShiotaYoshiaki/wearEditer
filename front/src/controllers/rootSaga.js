import { all } from 'redux-saga/effects';
import ImageListController from './inventory/itemListController';
import AccountController from './common/accountController';

export default function* routeSaga() {
  console.log('==============');
  yield all([
    ImageListController(),
    AccountController(),
  ])
}
