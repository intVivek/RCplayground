type action = {
    type: string;
    payload: Boolean;
}

export const navMenuToggleAction: Function = (payload: Boolean): action => {
    return {
        type: "navMenuToggle",
        payload: payload
    };
};
