import type { LayoutBlock } from "@rocket.chat/ui-kit";

export type initialStateType = {
  isMobile: boolean;
  isTablet: boolean;
  sideBarToggle: boolean;
  tabsToggle: number;
  navMenuToggle: boolean;
  payload: readonly LayoutBlock[];
};

export const initialState = {
  isMobile: false,
  isTablet: false,
  sideBarToggle: false,
  tabsToggle: 0,
  navMenuToggle: false,
  payload: [],
};
