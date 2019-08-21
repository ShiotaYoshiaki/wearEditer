import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import counterReducer from './CounterReducer';
import headerReducer from './common/headerReducer';
import createSaga from 'redux-saga';
import CounterController from '../controllers/CounterController';

export default function createStore() {
  const saga = createSaga();
  const store = reduxCreateStore(
    combineReducers({
      counter: counterReducer,
      header: headerReducer,
    }),
    applyMiddleware(
      logger,
      saga,
    ),
  );
  saga.run(
    CounterController,
  )

  return store;
}