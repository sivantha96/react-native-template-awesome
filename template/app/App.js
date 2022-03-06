/**
 * React Native App
 * everything starts from the here
 */

import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import Router from './Router';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const { store, persistor } = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
};

export default App;
