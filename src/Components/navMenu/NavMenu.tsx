import { css } from "@rocket.chat/css-in-js";
import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useEffect, useState, useContext } from "react";

import { context } from "../../Context";
import { navMenuToggleAction } from "../../Context/action";
import Menu from "./Menu";

const NavMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { navMenuToggle },
    dispatch,
  } = useContext(context);

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
        transition: var(--animation-fast);
      `}
      overflow="hidden"
      onClick={toggleHandler}
    >
      <Menu isOpen={isOpen} />
    </Box>
  );
};

export default NavMenu;
