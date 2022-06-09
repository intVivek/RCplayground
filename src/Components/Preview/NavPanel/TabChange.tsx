import { css } from "@rocket.chat/css-in-js";
import { Tabs } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import type { stateType } from "../../../Store";
import { editorToggleAction } from "../../../Store/action";

const TabChange: FC = () => {
  const { editorToggle } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  const disableBorder = css`
    // border-left: none !important;
    // border-right: none !important;
    // border-top: none !important;
    // box-shadow: none !important;
    // margin-right: 0 !important;
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
        selected={!!editorToggle}
        onClick={() => dispatch(editorToggleAction(true))}
        className={disableBorder}
      >
        Editor
      </Tabs.Item>
    </Tabs>
  );
};

export default TabChange;
