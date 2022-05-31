import React, {FC , useState, useEffect} from 'react';
import { Box } from '@rocket.chat/fuselage';
import {css} from '@rocket.chat/css-in-js';

import ScrollableSideBar from './ScrollableSideBar';
import SliderBtn from './SliderBtn';

const SideBar:FC<{isMobile: Boolean}> = ({isMobile}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
      setIsOpen(false);
    },[isMobile])

    const slide = isMobile
		? css`
        width: 100%;
        transform: translateX(${isOpen ? '0' : '-100%'});
				transition: 0.5s ease;
		  `:css`
        width: min(35%, 250px);
        transition: 0.5s ease;
      `;
    
  return (
    <Box
        position={'absolute'}
        height={'100%'}
        display={'flex'}
        zIndex={1}
        className={[slide]}
        elevation={'1'}
    >
      <ScrollableSideBar/>
      {isMobile && <SliderBtn isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </Box>
  )
}

export default SideBar