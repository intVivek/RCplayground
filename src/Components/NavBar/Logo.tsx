import { Box } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React from "react";
//
// import rocketchat from "./rocketchat.svg";

const Logo: FC = () => (
  <Box
    is={"img"}
    src={"./rocketchat.svg"}
    height={"100%"}
    width={"min(35%, 250px)"}
  />
);

export default Logo;
