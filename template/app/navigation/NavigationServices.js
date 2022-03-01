import React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

const navigationRef = React.createRef();

function navigate(routeName, params) {
    navigationRef.current?.navigate(routeName, params);
}

function navigateToSubStack(parentRoute, subRoute, params) {
    const navigateAction = CommonActions.navigate({ routeName: subRoute });
    navigationRef.current?.navigate(parentRoute, params, navigateAction);
}

function getCurrentRoute() {
    return navigationRef.current?.getCurrentRoute();
}

function goBack() {
    navigationRef.current?.goBack();
}

function push(routeName, params) {
    navigationRef.current?.dispatch(StackActions.push(routeName, params));
}

function fullReset(routeName) {
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 1,
            routes: [{ name: routeName }],
        }),
    );
}

// add other navigation functions that you need and export them

export default {
    navigationRef,
    navigateToSubStack,
    push,
    navigate,
    goBack,
    getCurrentRoute,
    fullReset,
};
