import React, { Component } from 'react';
import { View } from 'react-native';
import { handleAndroidBackButton } from './helpers/androidBackHandler';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="rocket" size={30} color="#900" />
            </View>
        );
    }
}

export default Router;
