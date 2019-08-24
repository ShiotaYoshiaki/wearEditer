import { all } from 'redux-saga/effects';
import ImageListController from './inventory/itemListController';
import AccountController from './header/accountController';

export default function* routeSaga() {
  console.log('==============');
  yield all([
    ImageListController(),
    AccountController(),
  ])
}
