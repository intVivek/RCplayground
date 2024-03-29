import './splitPlane.css';
import type { FC } from 'react';
import React, { useEffect, useContext } from 'react';
import SplitPane from 'react-split-pane';

import { context, previewTabsToggleAction } from '../../../Context';
import Display from '../Display';
import EditorPanel from '../Editor';

type PreviewSizeType = {
  blockSize: number,
  inlineSize: number,
};
const SplitPlaneContainer: FC<{ PreviewSize: PreviewSizeType }> = ({
  PreviewSize,
}) => {
  const {
    state: { isTablet },
    dispatch,
  } = useContext(context);

  useEffect(() => {
    dispatch(previewTabsToggleAction(0));
  }, [isTablet, dispatch]);

  const splitPaneProps = {
    defaultSize: PreviewSize.inlineSize * 0.5,
    minSize: 500,
    maxSize: PreviewSize.inlineSize - 300,
    allowResize: !isTablet,
  };

  return isTablet ? (
    <>
      <Display />
      <EditorPanel />
    </>
  ) : (
    <SplitPane {...splitPaneProps}>
      <Display />
      <EditorPanel />
    </SplitPane>
  );
};

export default SplitPlaneContainer;
