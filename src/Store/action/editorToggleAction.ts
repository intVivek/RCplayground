type action = {
    type: string;
    payload: Boolean;
}

export const editorToggleAction: Function = (payload: Boolean): action => {
    return {
        type: "editorToggle",
        payload: payload
    };
};
