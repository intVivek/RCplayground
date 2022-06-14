import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect, useContext } from "react";

import { context, sidebarToggleAction } from "../../Context";
import ScrollableSideBar from "./ScrollableSideBar";
import SliderBtn from "./SliderBtn";

const SideBar: FC = () => {
  const { state, dispatch } = useContext(context);

  useEffect(() => {
    dispatch(sidebarToggleAction(false));
  }, [state?.isMobile, dispatch]);

  const slide = state?.isMobile
    ? css`
        width: 100%;
        transform: translateX(${state?.sideBarToggle ? "0" : "-100%"});
        transition: var(--animation-default);
      `
    : css`
        width: min(35%, 250px);
        transition: var(--animation-default);
      `;

  return (
    <Box
      position={"absolute"}
      height={"100%"}
      display={"flex"}
      zIndex={1}
      className={[slide]}
      elevation={"1"}
    >
      <ScrollableSideBar />
      <SliderBtn />
    </Box>
  );
};

export default SideBar;
