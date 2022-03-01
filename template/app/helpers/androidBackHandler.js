import { BackHandler } from 'react-native';

/**
 * attaches an event listener that handles the android-only hardware back button
 * @param  {Function} callback The function to call on click
 */
export const handleAndroidBackButton = callback => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        callback?.();
        return true;
    });
};

/**
 * removes the event listener in order not to add a new one
 * every time the view component re-mounts
 */
export const removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', () => {});
};
