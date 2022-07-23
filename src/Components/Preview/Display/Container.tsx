import type { LayoutBlock } from "@rocket.chat/ui-kit";
import update from "immutability-helper";
import React, { useCallback, useState, useEffect, useContext } from "react";

import { context, docAction } from "../../../Context";
import { Card } from "./Card";

export interface Block {
  id: any;
  block: LayoutBlock;
}

export const Container = () => {
  const {
    state: {
      doc: { payload },
    },
    dispatch,
  } = useContext(context);
  const [uniqueBlocks, setUniqueBlocks] = useState<Block[]>(
    payload.map((block, i) => ({ id: i, block }))
  );

  useEffect(() => {
    console.log(payload);
    setUniqueBlocks(payload.map((block, i) => ({ id: i, block })));
  }, [payload.length]);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setUniqueBlocks((prevCards: Block[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Block],
        ],
      })
    );
  }, []);

  const updatePayload = () => {
    dispatch(
      docAction({
        payload: uniqueBlocks.map((block) => block.block),
        changedByEditor: false,
      })
    );
  };

  const renderCard = (
    block: { id: number; block: LayoutBlock },
    index: number
  ) => (
    <Card
      key={block.id}
      index={index}
      id={block.id}
      block={block.block}
      moveCard={moveCard}
      updatePayload={updatePayload}
    />
  );

  return (
    <>
      <div style={{ transition: "0.1s ease" }}>
        {uniqueBlocks.map((block, i) => renderCard(block, i))}
      </div>
    </>
  );
};
