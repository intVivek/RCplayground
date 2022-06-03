const rootReducer = (
  state = {
    isMobile: false,
    isTablet: false,
    sideBarToggle: false,
    editorToggle: false,
    navMenuToggle: false,
  },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "isMobile":
      return { ...state, isMobile: action.payload };
    case "isTablet":
      return { ...state, isTablet: action.payload };
    case "sidebarToggle":
      return { ...state, sideBarToggle: action.payload };
    case "editorToggle":
      return { ...state, editorToggle: action.payload };
    case "navMenuToggle":
      return { ...state, navMenuToggle: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
