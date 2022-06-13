type action = {
  type: string;
  payload: boolean;
};

export const editorToggleAction = (payload: boolean): action => ({
  type: "editorToggle",
  payload,
});
