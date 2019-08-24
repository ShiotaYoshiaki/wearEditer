import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import counterReducer from './CounterReducer';
import headerReducer from './common/headerReducer';
import itemListReducer from './inventory/itemListReducer';
import createSaga from 'redux-saga';
import CounterController from '../controllers/CounterController';
import ItemListController from '../controllers/inventory/itemListController';

export default function createStore() {
  const saga = createSaga();
  const store = reduxCreateStore(
    combineReducers({
      counter: counterReducer,
      header: headerReducer,
      itemList: itemListReducer,
    }),
    applyMiddleware(
      logger,
      saga,
    ),
  );
  saga.run(
    ItemListController,
    CounterController,
  )

  return store;
}