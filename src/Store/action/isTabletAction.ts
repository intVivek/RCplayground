type action = {
    type: string,
    payload: Boolean
}

export const isTabletAction: Function = (payload: Boolean): action => {
    return {
        type: "isTablet",
        payload: payload
    };
};