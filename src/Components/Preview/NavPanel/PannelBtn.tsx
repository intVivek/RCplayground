import { css } from "@rocket.chat/css-in-js";
import { Button, Avatar, Label } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useState } from "react";

const PannelBtn: FC<{ avatar: string; name: string; isSmall: boolean }> = ({
  avatar,
  name,
  isSmall,
}) => {
  const [hover, setHover] = useState(false);

  const style = css`
    width: ${hover ? "100%" : "0px"};
    white-space: nowrap;
    transition: 0.3s ease;
  `;

  return isSmall ? (
    <>
      <Button
        tiny
        square
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Avatar size="x16" url={avatar} />
      </Button>
      <Label overflow={"hidden"} className={style} fontSize="x10">
        {name}
      </Label>
    </>
  ) : (
    <Button small>{name}</Button>
  );
};

export default PannelBtn;
