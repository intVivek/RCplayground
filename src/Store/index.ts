import { configureStore   } from '@reduxjs/toolkit';
import rootReducer from './reducer';

export type stateType = {
	isMobile: boolean;
	isTablet: boolean;
	sideBarToggle: boolean;
	editorToggle: boolean;
	navMenuToggle: boolean;
}

const store = configureStore  ({reducer: rootReducer});

export default store;