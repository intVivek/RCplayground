import React, {FC} from 'react'
import {Box, Tabs } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';

const TabChange:FC<{isPreview: Boolean, setIsPreview: Function}> = ({isPreview, setIsPreview}) => {

    const disableBorder=css`
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
        box-shadow: none !important;
    `;
    return (
        <Box  is={Tabs} className={disableBorder}>
            <Tabs.Item  selected={isPreview?true:false} onClick={()=>setIsPreview(true)} className={disableBorder}>
                Preview
            </Tabs.Item>
            <Tabs.Item  selected={!isPreview?true:false} onClick={()=>setIsPreview(false)} className={disableBorder}>
                Editor
            </Tabs.Item>
        </Box>
  )
}

export default TabChange