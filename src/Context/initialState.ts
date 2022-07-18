import type { LayoutBlock } from "@rocket.chat/ui-kit";

export type docType = {
  payload: readonly LayoutBlock[];
  isFlush?: boolean;
};

export type initialStateType = {
  isMobile: boolean;
  isTablet: boolean;
  sideBarToggle: boolean;
  tabsToggle: number;
  navMenuToggle: boolean;
  doc: docType;
};

export const initialState: initialStateType = {
  isMobile: false,
  isTablet: false,
  sideBarToggle: false,
  tabsToggle: 0,
  navMenuToggle: false,
  doc: { payload: [], isFlush: false },
};
