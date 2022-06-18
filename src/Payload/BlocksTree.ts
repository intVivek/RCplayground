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
  singleSelect,
  multiSelect,
  datePicker,
  linearScale,
} from "./action";
import {
  plainText,
  mrkdwn,
  textFields,
  sectionButtonDefault,
  sectionButtonPrimary,
  sectionButtonDanger,
  sectionButtonAsLink,
} from "./section";

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
        label: "select",
        branches: [
          {
            label: "Single Select",
            payload: singleSelect,
          },
          {
            label: "Multi Select",
            payload: multiSelect,
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
        label: "date Picker",
        payload: datePicker,
      },
      {
        label: "linear scale",
        payload: linearScale,
      },
    ],
  },
  {
    label: "section",
    branches: [
      {
        label: "text",
        branches: [
          {
            label: "plain text",
            payload: plainText,
          },
          {
            label: "mrkdwn",
            payload: mrkdwn,
          },
          {
            label: "text fields",
            payload: textFields,
          },
        ],
      },
      {
        label: "Accessory",
        branches: [
          {
            label: "button",
            branches: [
              {
                label: "default",
                payload: sectionButtonDefault,
              },
              {
                label: "primary",
                payload: sectionButtonPrimary,
              },
              {
                label: "danger",
                payload: sectionButtonDanger,
              },
              {
                label: "as Link",
                payload: sectionButtonAsLink,
              },
            ],
          },
        ],
      },
    ],
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
