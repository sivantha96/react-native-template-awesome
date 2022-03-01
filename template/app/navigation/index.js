import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationServices from './NavigationServices';
import NavigationStack from './NavigationStack';

class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer ref={NavigationServices.navigationRef}>
                <NavigationStack />
            </NavigationContainer>
        );
    }
}

export default AppNavigator;
