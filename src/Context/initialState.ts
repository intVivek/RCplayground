import type * as UiKit from "@rocket.chat/ui-kit";

export type initialStateType = {
  isMobile: boolean;
  isTablet: boolean;
  sideBarToggle: boolean;
  tabsToggle: number;
  navMenuToggle: boolean;
  payload: UiKit.LayoutBlock[];
};

export const initialState = {
  isMobile: false,
  isTablet: false,
  sideBarToggle: false,
  tabsToggle: 0,
  navMenuToggle: false,
  payload: [],
};
