import React, {FC} from 'react';
import {Box, Label} from '@rocket.chat/fuselage';
import {css} from '@rocket.chat/css-in-js';

const Slider: FC<{isOpen: Boolean, setIsOpen: Function}> = ({isOpen, setIsOpen}) => {

  const slideBtnAnimation = isOpen
  ? css`
      clip-path: polygon(10% 0, 50% 40%, 90% 0, 100% 10%, 60% 50%, 100% 90%, 90% 100%, 50% 60%, 10% 100%, 0 90%, 40% 50%, 0 10%);
      transition: 0.5s ease;
    `:css`
      clip-path: polygon(32% 35%, 32% 35%, 79% 0, 87% 10%, 32% 50%, 87% 90%, 79% 100%, 32% 64%, 32% 65%, 13% 50%, 13% 50%, 13% 50%);

      transform: rotate(180deg);
      transition: 0.5s ease;

    `;
  return (
    <Box 
        position={'absolute'}
        width={isOpen?'100%':'150px'}
        paddingInlineStart={'20px'}
        paddingInlineEnd={'20px'}
        height={'40px'}
        display='flex'
        alignItems='center'
        justifyContent={'space-between'}
        onClick={()=>setIsOpen(!isOpen)}
        zIndex={'1'}
        className={isOpen?css`right: 0; transition: 0.5s ease;`:css`right: 0;transform: translateX(100%); transition: 0.5s ease;`}
      >
      <Label width={'80px'}>Components</Label>
      <Box 
          bg='info'
          size='20px'
          className={slideBtnAnimation}
        />
    </Box>
  )
}

export default Slider