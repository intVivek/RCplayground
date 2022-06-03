import { css } from "@rocket.chat/css-in-js";
import { Box, Button } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import type { stateType } from "../../Store";
import { navMenuToggleAction } from "../../Store/action/navMenuToggleAction";
import BurgerIcon from "./BurgerIcon";

const RightNavBtn: FC = () => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state: stateType) => state);

  return (
    <Box
      position="absolute"
      className={css`
        right: 20px;
      `}
      onClick={() => isMobile && dispatch(navMenuToggleAction(true))}
    >
      {isMobile ? (
        <BurgerIcon />
      ) : (
        <Button danger primary>
          Send to RocketChat
        </Button>
      )}
    </Box>
  );
};

export default RightNavBtn;
