import type { initialStateType } from "./initialState";

type actionType = { type: string; payload: any };

const reducer = (state: initialStateType, action: actionType) => {
  switch (action.type) {
    case "isMobile":
      return { ...state, isMobile: action.payload };
    case "isTablet":
      return { ...state, isTablet: action.payload };
    case "sidebarToggle":
      return { ...state, sideBarToggle: action.payload };
    case "editorToggle":
      return { ...state, tabsToggle: action.payload };
    case "navMenuToggle":
      return { ...state, navMenuToggle: action.payload };
    default:
      return state;
  }
};
export default reducer;
