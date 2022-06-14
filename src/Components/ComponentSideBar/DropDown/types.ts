export type ItemBranch = {
  id: string;
  label: string;
  branches?: Item;
  selected?: boolean;
  payload?: object;
};

export type Item = ItemBranch[];
