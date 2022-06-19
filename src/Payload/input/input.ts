export const inputWithSingleLineInput = {
  type: "input",
  element: {
    type: "plain_text_input",
    actionId: "plain_text_input_1",
    placeholder: {
      type: "plain_text",
      text: "Enter name",
      emoji: true,
    },
    initialValue: "Vivek Srivastava",
    multiline: false,
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};

export const inputWithMultiLineInput = {
  type: "input",
  element: {
    type: "plain_text_input",
    actionId: "plain_text_input_1",
    placeholder: {
      type: "plain_text",
      text: "Enter name",
      emoji: true,
    },
    initialValue: "Vivek Srivastava",
    multiline: true,
  },
  label: {
    type: "plain_text",
    text: "Label",
    emoji: true,
  },
};
