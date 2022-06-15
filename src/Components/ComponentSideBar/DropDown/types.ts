export type ItemBranch = {
  label: string;
  branches?: Item;
  payload?: object;
};

export type Item = ItemBranch[];
