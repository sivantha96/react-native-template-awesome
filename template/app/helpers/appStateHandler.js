import { AppState } from 'react-native';

/**
 * attaches an event listener to app state whether the app is on background or foreground
 * @param  {Function} callback The function to call on state change
 */
export const handleAppState = callback => {
    AppState.addEventListener('change', () => {
        callback?.();
    });
};
