import { css } from "@rocket.chat/css-in-js";
import { Tabs } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext } from "react";

import { context } from "../../../Context";
import { editorToggleAction } from "../../../Context/action";

const TabChange: FC = () => {
  const {
    state: { editorToggle },
    dispatch,
  } = useContext(context);

  const disableBorder = css`
    border-left: none !important;
    border-right: none !important;
    border-top: none !important;
    box-shadow: none !important;
    margin-right: 0 !important;
  `;
  return (
    <Tabs>
      <Tabs.Item
        selected={!editorToggle}
        onClick={() => dispatch(editorToggleAction(false))}
        className={disableBorder}
      >
        Preview
      </Tabs.Item>
      <Tabs.Item
        selected={editorToggle}
        onClick={() => dispatch(editorToggleAction(true))}
        className={disableBorder}
      >
        Editor
      </Tabs.Item>
    </Tabs>
  );
};

export default TabChange;
