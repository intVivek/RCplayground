import React, { FC } from 'react'
import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { useSelector } from 'react-redux';

import Display from './Display';
import Editor from './Editor';
import { stateType } from '../../Store';

const Wrapper: FC = () => {

    const { isTablet, editorToggle } = useSelector((state: stateType) => state);

    return (
        <Box
            position='relative'
            width={'100%'}
            flexGrow={1}
        >
            <Box
                position='absolute'
                width={isTablet ? '200%' : '100%'}
                height={'100%'}
                display={'flex'}
                className={
                    editorToggle ? css`
                        transition: 0.5s ease;
                        transform: translateX(-50%);`
                        : css`
                        transition: 0.5s ease;
                        transform: translateX(0%);`
                }
            >
                <Display />
                <Editor />
            </Box>
        </Box>
    )
}

export default Wrapper