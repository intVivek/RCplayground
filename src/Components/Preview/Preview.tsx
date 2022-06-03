import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { stateType } from "../../Store";
import { editorToggleAction } from "../../Store/action";
import NavPanel from "./NavPanel";
import Wrapper from "./Wrapper";

const Preview: FC = () => {
  const { isMobile, isTablet } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editorToggleAction(false));
  }, [isTablet, dispatch]);

  return (
    <Box
      display={"flex"}
      flexGrow={1}
      bg="#fff"
      height={"100%"}
      flexDirection={"column"}
      pis={isMobile ? "" : "min(35%, 250px)"}
      className={css`
        transition: 0.5s ease;
      `}
    >
      <NavPanel />
      <Wrapper />
    </Box>
  );
};

export default Preview;
