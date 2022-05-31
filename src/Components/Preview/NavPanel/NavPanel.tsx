import React, {FC} from 'react';
import {Box, ButtonGroup, Button} from '@rocket.chat/fuselage';

import TabChange from './TabChange';

const NavPanel: FC<{isPreview: Boolean, setIsPreview: Function, isTablet: Boolean, isMobile: Boolean}> = ({isPreview, setIsPreview, isTablet, isMobile}) => {
  return (
    <Box 
      width={'100%'}
      height={'40px'}
      borderBlockEnd='1px solid #e6e6e6'
      display={'flex'}
      alignItems={'center'}
      justifyContent={'flex-end'}
    > 
      {!isMobile && <ButtonGroup marginInlineEnd={'20px'}>
        <Button small>Clear Blocks</Button>
      </ButtonGroup>}
      {isTablet && <TabChange isPreview={isPreview} setIsPreview={setIsPreview}/>}
    </Box>
  )
}

export default NavPanel