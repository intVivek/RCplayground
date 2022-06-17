import type { Item } from "../Components/ComponentSideBar/DropDown/types";
import {
  buttonDefault,
  buttonPrimary,
  buttonDanger,
  buttonAsLink,
  image,
  menu,
  singleLine,
  multiLine,
  select,
} from "./action";

const BlocksTree: Item = [
  {
    label: "actions",
    branches: [
      {
        label: "button",
        branches: [
          {
            label: "default",
            payload: buttonDefault,
          },
          {
            label: "primary",
            payload: buttonPrimary,
          },
          {
            label: "danger",
            payload: buttonDanger,
          },
          {
            label: "as Link",
            payload: buttonAsLink,
          },
        ],
      },
      {
        label: "input",
        branches: [
          {
            label: "Single Line",
            payload: singleLine,
          },
          {
            label: "Multi Line",
            payload: multiLine,
          },
        ],
      },
      {
        label: "image",
        payload: image,
      },
      {
        label: "menu",
        payload: menu,
      },
      {
        label: "select",
        payload: select,
      },
    ],
  },
  {
    label: "section",
    branches: [],
  },
  {
    label: "preview",
    branches: [],
  },
  {
    label: "input",
    branches: [],
  },
  {
    label: "image",
    branches: [],
  },
  {
    label: "Context",
    branches: [],
  },
  {
    label: "Conditional",
    branches: [],
  },
  {
    label: "divider",
    branches: [
      {
        label: "Plain",
        payload: {
          type: "divider",
          blockId: "divider_1",
        },
      },
    ],
  },
];

export default BlocksTree;
