/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useContext } from "react";

import { ReactComponent as Close } from "../../../Assets/Icon/cross.svg";
import { context, payloadAction } from "../../../Context";

const Display = ({ elementIndex }: { elementIndex: number }) => {
  const { state, dispatch } = useContext(context);

  const deleteElement = () => {
    const { payload } = state;
    // @ts-ignore
    payload.splice(elementIndex, 1);
    dispatch(payloadAction([...payload]));
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "20px",
        height: "20px",
        top: "6px",
        right: "6px",
        visibility: "hidden",
        cursor: "pointer",
      }}
      className={"closeBtn"}
      onClick={deleteElement}
    >
      <Close />
    </div>
  );
};
export default Display;
