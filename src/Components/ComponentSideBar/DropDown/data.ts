import type { Item } from "./types";

export const mockOrgTreeList: Item = [
  {
    label: "actions",
    id: "1",
    selected: true,
    branches: [
      {
        label: "button",
        id: "2",
        branches: [
          {
            label: "Primary",
            id: "3",
            payload: {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Click Me",
                    emoji: true,
                  },
                  value: "click_me_123",
                },
              ],
            },
          },
          {
            label: "Danger",
            id: "4",
            payload: {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "Click Me",
                    emoji: true,
                  },
                  value: "click_me_123",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    label: "image",
    id: "6",
    selected: true,
    branches: [],
  },
  {
    label: "overflow",
    id: "6",
    selected: true,
    branches: [],
  },
  {
    label: "text input",
    id: "6",
    selected: true,
    branches: [],
  },
  {
    label: "static select",
    id: "6",
    selected: true,
    branches: [],
  },
  {
    label: "multi select",
    id: "6",
    selected: true,
    branches: [],
  },
  {
    label: "divider",
    id: "6",
    selected: true,
    branches: [
      {
        label: "Plain",
        id: "6",
        payload: {
          type: "divider",
          blockId: "divider_1",
        },
      },
    ],
  },
];
