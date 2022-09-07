import type { LayoutBlock } from '@rocket.chat/ui-kit';

type payload = LayoutBlock[];

export type templateType = {
  heading: string,
  description: string,
  payloads: payload[],
};

export const templates: templateType[] = [
  {
    heading: 'Approval',
    description: 'Example message for receiving and responding to requests.',
    payloads: [
      [
        {
          type: 'actions',
          elements: [
            {
              type: 'overflow',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              options: [
                {
                  value: 'option_1',
                  text: {
                    type: 'plain_text',
                    text: 'lorem ipsum 🚀',
                    emoji: true,
                  },
                },
                {
                  value: 'option_2',
                  text: {
                    type: 'plain_text',
                    text: 'lorem ipsum 🚀',
                    emoji: true,
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              style: 'primary',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              style: 'danger',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              url: 'https://rocket.chat',
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'This is a plain text section block.',
            emoji: true,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
          ],
        },
      ],
      [
        {
          type: 'actions',
          elements: [
            {
              type: 'overflow',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              options: [
                {
                  value: 'option_1',
                  text: {
                    type: 'plain_text',
                    text: 'lorem ipsum 🚀',
                    emoji: true,
                  },
                },
                {
                  value: 'option_2',
                  text: {
                    type: 'plain_text',
                    text: 'lorem ipsum 🚀',
                    emoji: true,
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              style: 'primary',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              style: 'danger',
            },
          ],
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              appId: 'app-id',
              blockId: 'block-id',
              actionId: 'action-id',
              text: {
                type: 'plain_text',
                text: 'Click Me',
                emoji: true,
              },
              url: 'https://rocket.chat',
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'This is a plain text section block.',
            emoji: true,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
            {
              type: 'plain_text',
              text: '*this is plain_text text*',
              emoji: true,
            },
          ],
        },
      ],
    ],
  },
  {
    heading: 'Notification',
    description:
      'Example message for getting updates on new info and taking relevant action.',
    payloads: [
      [
        {
          type: 'preview',
          title: [
            {
              type: 'plain_text',
              text: 'Vivek',
              emoji: true,
            },
          ],
          description: [
            {
              type: 'plain_text',
              text: 'I Need a Description',
              emoji: true,
            },
          ],
          footer: {
            type: 'context',
            elements: [
              {
                type: 'plain_text',
                text: 'Srivastava',
              },
            ],
          },
        },
        {
          type: 'preview',
          title: [
            {
              type: 'plain_text',
              text: 'Vivek',
              emoji: true,
            },
          ],
          description: [
            {
              type: 'plain_text',
              text: 'I Need a Description',
              emoji: true,
            },
          ],
          thumb: {
            url: 'https://picsum.photos/200/300',
          },
          footer: {
            type: 'context',
            elements: [
              {
                type: 'plain_text',
                text: 'Srivastava',
              },
            ],
          },
        },
        {
          type: 'preview',
          title: [
            {
              type: 'plain_text',
              text: 'Vivek',
              emoji: true,
            },
          ],
          description: [
            {
              type: 'plain_text',
              text: 'I Need a Description',
              emoji: true,
            },
          ],
          thumb: {
            url: 'https://picsum.photos/200/300',
          },
          footer: {
            type: 'context',
            elements: [
              {
                type: 'plain_text',
                text: 'Srivastava',
              },
            ],
          },
        },
        {
          type: 'preview',
          title: [
            {
              type: 'plain_text',
              text: 'Vivek',
              emoji: true,
            },
          ],
          description: [
            {
              type: 'plain_text',
              text: 'I Need a Description',
              emoji: true,
            },
          ],
          footer: {
            type: 'context',
            elements: [
              {
                type: 'plain_text',
                text: 'Srivastava',
              },
            ],
          },
          externalUrl: 'https://rocket.chat',
        },
        {
          type: 'image',
          imageUrl: 'https://picsum.photos/200/300',
          altText: 'inspiration',
        },
      ],
    ],
  },
];
