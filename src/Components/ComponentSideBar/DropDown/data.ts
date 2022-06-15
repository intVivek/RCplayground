import type { Item } from "./types";

export const mockOrgTreeList: Item = [
  {
    label: "actions",
    branches: [
      {
        label: "button",
        branches: [
          {
            label: "Primary",
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
    branches: [],
  },
  {
    label: "overflow",
    branches: [],
  },
  {
    label: "text input",
    branches: [],
  },
  {
    label: "static select",
    branches: [],
  },
  {
    label: "multi select",
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
