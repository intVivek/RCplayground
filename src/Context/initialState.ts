export type initialStateType = {
  isMobile: boolean;
  isTablet: boolean;
  sideBarToggle: boolean;
  tabsToggle: number;
  navMenuToggle: boolean;
};

export const initialState = {
  isMobile: false,
  isTablet: false,
  sideBarToggle: false,
  tabsToggle: 0,
  navMenuToggle: false,
};
