import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import counterReducer from './CounterReducer';
import createSaga from 'redux-saga';
import rootSaga from '../controllers/CounterController';

export default function createStore() {
  const saga = createSaga();
  const store = reduxCreateStore(
    combineReducers({
      counter: counterReducer,
    }),
    applyMiddleware(
      logger,
      saga,
    )
  );
  saga.run(rootSaga)

  return store;
}