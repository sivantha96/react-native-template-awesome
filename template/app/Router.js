import React, { Component } from 'react';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import HomeContainer from './features/Home/containers/HomeContainer';

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
    startNavigation = () => {};

    // global android back handler
    onPressBackHandler = () => {};

    render() {
        return <HomeContainer />;
    }
}

export default Router;
