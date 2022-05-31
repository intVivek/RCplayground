import React, {FC} from 'react'
import { Box } from '@rocket.chat/fuselage'
import rocketchat from './rocketchat.svg';

const Logo:FC = () => {
  return (
    <Box 
        is={'img'}
        src={rocketchat}
        height={'100%'}
        width={'min(35%, 250px)'}
    />
  )
}

export default Logo