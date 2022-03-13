import React, { Component } from 'react';
import { BackHandler, View } from 'react-native';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import { MAIN_STACK_SCREENS } from './navigation/constants';
import NavigationServices from './navigation/NavigationServices';
import * as NavigationHelpers from './navigation/NavigationHelpers';

export class Router extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.initialize();
            this.startNavigation();
        }, 1000);
    }

    // initial setup
    initialize = () => {
        handleAndroidBackButton(this.onPressBackHandler);
    };

    // initial navigation logic
    startNavigation = () => {
        NavigationHelpers.navigateToHome();
    };

    // global android back handler
    onPressBackHandler = () => {
        const currentRoute = NavigationServices.getCurrentRoute();
        if (!currentRoute) {
            return;
        }

        switch (currentRoute?.name) {
            case MAIN_STACK_SCREENS.ROUTER:
                BackHandler.exitApp();
                break;

            default:
                NavigationServices.goBack();
                break;
        }
    };

    render() {
        return <View />;
    }
}

export default Router;
