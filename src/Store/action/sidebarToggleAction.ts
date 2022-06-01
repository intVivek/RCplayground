type action = {
    type: string;
    payload: Boolean;
}

export const sidebarToggleAction: Function = (payload: Boolean): action => {
    return {
        type: "sidebarToggle",
        payload: payload
    };
};
