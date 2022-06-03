import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { stateType } from "../../Store";
import { sidebarToggleAction } from "../../Store/action";
import ScrollableSideBar from "./ScrollableSideBar";
import SliderBtn from "./SliderBtn";

const SideBar: FC = () => {
  const { isMobile, sideBarToggle } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sidebarToggleAction(false));
  }, [isMobile, dispatch]);

  const slide = isMobile
    ? css`
        width: 100%;
        transform: translateX(${sideBarToggle ? "0" : "-100%"});
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
