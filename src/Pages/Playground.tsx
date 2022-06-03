import { Box } from "@rocket.chat/fuselage";
import { useMediaQueries } from "@rocket.chat/fuselage-hooks";
import type { FC } from "react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ComponentSideBar from "../Components/ComponentSideBar";
import NavBar from "../Components/NavBar";
import Preview from "../Components/Preview";
import NavMenu from "../Components/navMenu";
import type { stateType } from "../Store";
import { isMobileAction, isTabletAction } from "../Store/action";

const Playground: FC = () => {
  const { navMenuToggle } = useSelector((state: stateType) => state);
  const [isMobile, isTablet] = useMediaQueries(
    "(max-width: 500px)",
    "(max-width: 1050px)"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isMobileAction(isMobile));
  }, [isMobile, dispatch]);

  useEffect(() => {
    dispatch(isTabletAction(isTablet));
  }, [isTablet, dispatch]);

  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      overflow="hidden"
      bg={"#f6f9fc"}
    >
      <NavBar />
      {navMenuToggle && <NavMenu />}
      <Box width={"100%"} flexGrow={1} position={"relative"} zIndex={0}>
        <ComponentSideBar />
        <Preview />
      </Box>
    </Box>
  );
};

export default Playground;
