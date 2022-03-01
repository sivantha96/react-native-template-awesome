/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */

import { MAIN_STACK_SCREENS } from './constants';
import NavigationService from './NavigationServices';

export function navigateToHome(params) {
    NavigationService.navigate(MAIN_STACK_SCREENS.HOME, params);
}
