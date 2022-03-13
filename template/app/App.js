/**
 * React Native App
 * everything starts from the here
 */

import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './navigation';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    return <AppNavigator />;
};

export default App;
