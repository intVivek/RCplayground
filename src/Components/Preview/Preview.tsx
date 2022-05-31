import React, {FC} from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';

import NavPanel from './NavPanel';
import Wrapper from './Wrapper';

const Preview: FC<{isMobile: Boolean, isTablet: Boolean}>= ({isMobile, isTablet}) => {
  const [isPreview, setIsPreview] = useState(true);

  useEffect(()=>{
    setIsPreview(true);
  },[isTablet])

  return (
    <Box 
      display={'flex'}
      flexGrow={1}
      bg='#fff'
      height={'100%'}
      flexDirection={'column'}
      pis={isMobile?'':'min(35%, 250px)'}
      className={css`
          transition: 0.5s ease;
      `}
    >
      <NavPanel isPreview={isPreview} setIsPreview={setIsPreview} isMobile={isMobile} isTablet={isTablet}/>
      <Wrapper isTablet={isTablet} isPreview={isPreview}/>
    </Box>
  )
}

export default Preview;