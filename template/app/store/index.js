import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';
import rootSagas from './sagas';

const persistConfig = {
    timeout: 50000,
    key: 'root',
    storage,
    whitelist: [], // reducers to be persisted
    debug: __DEV__,
    transforms: [], // to filter whitelisted reducers
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

// middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composedEnhancer(applyMiddleware(...middleware));

const store = createStore(persistedReducer, undefined, enhancer);
const persistor = persistStore(store, { enhancer });

// saga middleware should run after creating the store with the middleware
sagaMiddleware.run(rootSagas);

export default () => {
    return { store, persistor };
};
