import React, {FC} from 'react'
import {Box} from '@rocket.chat/fuselage';
import {useMediaQueries} from '@rocket.chat/fuselage-hooks';

import NavBar from '../Components/NavBar';
import Preview from '../Components/Preview';
import ComponentSideBar from '../Components/ComponentSideBar';

const Playground: FC = () => {
    const [isMobile, isTablet] = useMediaQueries('(max-width: 450px)','(max-width: 1050px)');

    return (
        <Box 
            display={'flex'}
            width={'100%'}
            height={'100%'}
            flexDirection={'column'}
            overflow='hidden'
            bg={'#f6f9fc'}
        >
            <NavBar/>
            <Box width={'100%'} flexGrow={1} position={'relative'}>
                <ComponentSideBar isMobile={isMobile}/>
                <Preview isMobile={isMobile} isTablet={isTablet}/>
            </Box>
        </Box>
    )
}

export default Playground