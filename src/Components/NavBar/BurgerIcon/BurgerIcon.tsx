import { usePrefersReducedMotion } from "@rocket.chat/fuselage-hooks";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import { useSelector } from "react-redux";

import type { stateType } from "../../../Store";
import Line from "./Line";
import Wrapper from "./Wrapper";

const BurgerIcon = ({ children }: { children?: ReactNode }): ReactElement => {
  const isReducedMotionPreferred = usePrefersReducedMotion();
  const { navMenuToggle } = useSelector((state: stateType) => state);

  return (
    <Wrapper>
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      <Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
      {children}
    </Wrapper>
  );
};

export default BurgerIcon;
