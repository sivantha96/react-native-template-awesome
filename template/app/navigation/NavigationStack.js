import React from 'react';
import { MAIN_STACK_SCREENS } from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import Router from '../Router';
import HomeContainer from '../features/Home/containers/HomeContainer';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={MAIN_STACK_SCREENS.ROUTER}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name={MAIN_STACK_SCREENS.ROUTER} component={Router} />
            <Stack.Screen name={MAIN_STACK_SCREENS.HOME} component={HomeContainer} />
        </Stack.Navigator>
    );
};

export default NavigationStack;
