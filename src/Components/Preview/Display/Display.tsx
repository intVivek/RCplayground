import { Box, Scrollable } from "@rocket.chat/fuselage";
import type { FC } from "react";
import React, { useContext, useState, useEffect } from "react";
import type { DropResult } from "react-beautiful-dnd";

import { context, docAction } from "../../../Context";
import DraggableList from "../../Draggable/DraggableList";
import type { Block } from "../../Draggable/DraggableList";
import { reorder } from "./Reorder";

const Display: FC = () => {
  const {
    state: {
      doc: { payload },
    },
    dispatch,
  } = useContext(context);
  const [uniqueBlocks, setUniqueBlocks] = useState<Block[]>(
    payload.map((block, i) => ({ id: `${i}`, payload: block }))
  );

  useEffect(() => {
    console.log(payload);
    setUniqueBlocks(
      payload.map((block, i) => ({ id: `${i}`, payload: block }))
    );
  }, [payload.length]);

  useEffect(() => {
    dispatch(
      docAction({
        payload: uniqueBlocks.map((block) => block.payload),
        changedByEditor: false,
      })
    );
  }, [uniqueBlocks]);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const newBlocks = reorder(uniqueBlocks, source.index, destination.index);

    setUniqueBlocks(newBlocks);
  };

  return (
    <Scrollable vertical>
      <Box
        height={"100%"}
        width={"100%"}
        borderInlineStart="var(--default-border)"
      >
        <DraggableList blocks={uniqueBlocks} onDragEnd={onDragEnd} />
      </Box>
    </Scrollable>
  );
};

export default Display;
