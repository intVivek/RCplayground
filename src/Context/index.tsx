import createCtx from "./createCtx";
import { initialState } from "./initialState";
import reducer from "./reducer";

export { isMobileAction } from "./action";
export { isTabletAction } from "./action";
export { sidebarToggleAction } from "./action";
export { tabsToggleAction } from "./action";
export { navMenuToggleAction } from "./action";
export { payloadAction } from "./action";

const [context, Provider] = createCtx(reducer, initialState);

export { context, Provider };
