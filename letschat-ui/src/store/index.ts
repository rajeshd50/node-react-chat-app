import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistPartial } from "redux-persist/es/persistReducer";

import rootReducer from './reducers';
import { sagas } from '../sagas';

let middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let middleware = applyMiddleware(...middlewares);

// add the redux dev tools process.env.NODE_ENV !== 'production' &&
if ((['prod', 'stage'].indexOf((process.env as any).REACT_APP_STAGE) < 0) && (window as any).devToolsExtension) {
  middleware = compose(middleware, (window as any).devToolsExtension());
}

/**
 * TODO: add registration in blacklist
 */

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['global']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore<any & PersistPartial, any, any, any>(persistedReducer, middleware);
const persistor = persistStore(store)


sagaMiddleware.run(sagas);

export { store, persistor };