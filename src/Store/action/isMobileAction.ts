type action = {
    type: string,
    payload: Boolean
}

export const isMobileAction: Function = (payload: Boolean): action => {
    return {
        type: "isMobile",
        payload: payload
    };
};