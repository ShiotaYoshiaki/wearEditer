import countController from '../controllers/CounterController';
import { all } from 'redux-saga/effects';

export default function* routeSaga() {
  console.log('==============');
  yield all({
    countController,
  })
}
