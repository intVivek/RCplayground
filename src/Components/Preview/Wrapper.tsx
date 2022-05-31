import React, {FC} from 'react'
import {Box} from '@rocket.chat/fuselage';
import {css} from '@rocket.chat/css-in-js';
import {useResizeObserver} from '@rocket.chat/fuselage-hooks';

import Display from './Display';
import Editor from './Editor';

const Wrapper: FC<{isTablet: Boolean, isPreview: Boolean}> = ({isTablet, isPreview}) => {
    const { ref, contentBoxSize, borderBoxSize } = useResizeObserver();
    console.log(ref, contentBoxSize, borderBoxSize);
  return (
    <Box  
        position='relative'
        width={'100%'}
        flexGrow={1}
        ref={ref}
    >
        <Box
            position='absolute'
            width={isTablet?'200%':'100%'}
            height={'100%'}
            display={'flex'}
            className={
                isPreview?css`
                    transition: 0.5s ease;
                    transform: translateX(0%);`
                :css`
                    transition: 0.5s ease;
                    transform: translateX(-50%);`
            }
        >
            <Display />
            <Editor isTablet={isTablet}/>
        </Box>
    </Box>
  )
}

export default Wrapper