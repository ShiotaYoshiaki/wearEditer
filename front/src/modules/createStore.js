import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import headerReducer from './common/headerReducer';
import itemListReducer from './inventory/itemListReducer';
import createSagaMiddleware from 'redux-saga';
import ItemListController from '../controllers/inventory/itemListController';
import rootSaga from '../controllers/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  // const saga = createSaga();
  const store = reduxCreateStore(
    combineReducers({
      header: headerReducer,
      itemList: itemListReducer,
    }),
    applyMiddleware(
      logger,
      // saga,
      sagaMiddleware
    ),
  );
  sagaMiddleware.run(rootSaga)

  return store;
}