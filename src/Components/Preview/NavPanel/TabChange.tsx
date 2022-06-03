import React, { FC } from 'react'
import { Box, Tabs } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { useDispatch, useSelector } from 'react-redux';

import { stateType } from '../../../Store';
import { editorToggleAction } from '../../../Store/action';

const TabChange: FC = () => {

    const { editorToggle } = useSelector((state: stateType) => state);
    const dispatch = useDispatch();

    const disableBorder = css`
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
        box-shadow: none !important;
        margin-right: 0 !important;
    `;
    return (
        <Box is={Tabs} className={disableBorder}>
            <Tabs.Item selected={!editorToggle ? true : false} onClick={() => dispatch(editorToggleAction(false))} className={disableBorder}>
                Preview
            </Tabs.Item>
            <Tabs.Item selected={editorToggle ? true : false} onClick={() => dispatch(editorToggleAction(true))} className={disableBorder}>
                Editor
            </Tabs.Item>
        </Box>
    )
}

export default TabChange