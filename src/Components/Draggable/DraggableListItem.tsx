import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

import ModalPayload from "../Preview/Display/ModalPayload/ModalPayload";
import type { Block } from "./DraggableList";

export type DraggableListItemProps = {
  block: Block;
  index: number;
};

const DraggableListItem = ({ block, index }: DraggableListItemProps) => (
  <Draggable draggableId={block.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <ModalPayload payload={[block.payload]} index={index} />
      </div>
    )}
  </Draggable>
);

export default DraggableListItem;
