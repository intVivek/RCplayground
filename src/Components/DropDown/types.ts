import type { LayoutBlock } from "@rocket.chat/ui-kit";

export type ItemProps = {
  label: string;
  layer: number;
  payload?: LayoutBlock;
  children?: ReadonlyArray<JSX.Element>;
};

export type ItemBranch = {
  label: string;
  branches?: Item;
  payload?: LayoutBlock;
};

export type Item = ItemBranch[];
