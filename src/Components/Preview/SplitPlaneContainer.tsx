import type { FC } from "react";
import React, { useEffect, useContext } from "react";
import SplitPane from "react-split-pane";

import { context, tabsToggleAction } from "../../Context";
import Display from "./Display";
import Editor from "./Editor";

const SplitPlaneContainer: FC = () => {
  const {
    state: { isTablet },
    dispatch,
  } = useContext(context);

  useEffect(() => {
    dispatch(tabsToggleAction(0));
  }, [isTablet, dispatch]);
  const splitPaneProps = {
    defaultSize: 500,
    allowResize: !isTablet,
  };
  return isTablet ? (
    <>
      <Display />
      <Editor />
    </>
  ) : (
    <SplitPane {...splitPaneProps}>
      <Display />
      <Editor />
    </SplitPane>
  );
};

export default SplitPlaneContainer;
