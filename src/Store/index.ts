import { configureStore   } from '@reduxjs/toolkit';
import rootReducer from './reducer';

export type stateType = {
	isMobile: Boolean;
	isTablet: Boolean;
	sideBarToggle: Boolean;
	editorToggle: Boolean;
}

const store = configureStore  ({reducer: rootReducer});

export default store;