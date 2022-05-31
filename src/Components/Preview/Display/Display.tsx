import React, {FC} from 'react'
import { Box, Scrollable } from '@rocket.chat/fuselage';

const Display: FC = () => {
  return (
    <Scrollable vertical>
        <Box height={'100%'} flexGrow={1}>
        </Box>
  </Scrollable>
  )
}

export default  Display;