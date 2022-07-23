import { Box } from "@rocket.chat/fuselage";
import { UiKitModal as uiKitModal } from "@rocket.chat/fuselage-ui-kit";
import type { LayoutBlock } from "@rocket.chat/ui-kit";
import type { XYCoord } from "dnd-core";
import type { FC } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import DeleteElementBtn from "./DeleteElementBtn";
import ElementWrapper from "./ElementWrapper";
import { ItemTypes } from "./ItemTypes";

const style = {
  margin: "10px",
  backgroundColor: "white",
  cursor: "move",
  transition: "0.1s ease",
};

export interface CardProps {
  id: any;
  block: LayoutBlock;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number, end: boolean) => void;
  updatePayload: () => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({
  id,
  block,
  index,
  moveCard,
  updatePayload,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => ({ id, index }),
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
    end() {
      updatePayload();
    },
  });

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor: any) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      console.log(monitor.canDrop(), monitor.isOver(), monitor.didDrop());
      moveCard(dragIndex, hoverIndex, monitor.getDropResult() !== null);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      <ElementWrapper key={id}>
        <DeleteElementBtn elementIndex={id} />
        <Box>{uiKitModal([block])}</Box>
      </ElementWrapper>
    </div>
  );
};
