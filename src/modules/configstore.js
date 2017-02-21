/*
 * @Author: LIU CHENG 
 * @Date: 2017-02-21 21:52:54 
 * @Last Modified by:   LIU CHENG 
 * @Last Modified time: 2017-02-21 21:52:54 
 */
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
import createlogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default function configStore() {

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createlogger());
  }

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  )

  sagaMiddleware.run(rootSaga);

  return store;
}