import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import type { stateType } from "../../Store";
import { navMenuToggleAction } from "../../Store/action";
import Menu from "./Menu";

const NavMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navMenuToggle } = useSelector((state: stateType) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(navMenuToggle);
  }, [navMenuToggle]);

  const toggleHandler = () => {
    setIsOpen(false);
    setTimeout(() => {
      dispatch(navMenuToggleAction(false));
    }, 300);
  };

  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      zIndex={3}
      display={"flex"}
      bg={isOpen ? "#000000cc" : "transparent"}
      className={css`
        transition: 0.3s ease;
      `}
      overflow="hidden"
      onClick={toggleHandler}
    >
      <Menu isOpen={isOpen} />
    </Box>
  );
};

export default NavMenu;
