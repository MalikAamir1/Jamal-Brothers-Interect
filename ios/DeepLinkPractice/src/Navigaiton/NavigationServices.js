import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();


// Define your screen names and params
const SCREEN_NAMES = {
	PostDetails: 'PostDetails',
	Profile: 'Profile',
};

// Dispatch a navigate action to the navigation state
export const navigate = (screenName, params) => {
	const action = NavigationActions.navigate({
		routeName: screenName,
		params: params,
	});
	NavigationActions.dispatch(action);
};
