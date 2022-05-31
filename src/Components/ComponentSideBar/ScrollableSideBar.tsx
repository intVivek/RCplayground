import React, {FC} from 'react'
import { Scrollable, Box} from '@rocket.chat/fuselage';

const ScrollableSideBar: FC = ()=> {
  return (
    <Scrollable vertical>
      <Box
          flexGrow={1}
          bg={'#f6f9fc'}
      >
      </Box>
    </Scrollable>
  )
}

export default ScrollableSideBar