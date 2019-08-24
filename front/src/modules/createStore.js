import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import headerReducer from './common/headerReducer';
import itemListReducer from './inventory/itemListReducer';
import createSagaMiddleware from 'redux-saga';
import ItemListController from '../controllers/inventory/itemListController';
import rootReducer from '../modules/roodReducer';
import rootSaga from '../controllers/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers(rootReducer),
    applyMiddleware(
      logger,
      sagaMiddleware
    ),
  );
  sagaMiddleware.run(rootSaga)

  return store;
}