import React, { FC, useEffect } from 'react'
import { Box } from '@rocket.chat/fuselage';
import { useMediaQueries } from '@rocket.chat/fuselage-hooks';
import { useDispatch } from 'react-redux';

import NavBar from '../Components/NavBar';
import Preview from '../Components/Preview';
import ComponentSideBar from '../Components/ComponentSideBar';
import { isMobileAction, isTabletAction } from '../Store/action';

const Playground: FC = () => {
    const [isMobile, isTablet] = useMediaQueries('(max-width: 450px)', '(max-width: 1050px)');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(isMobileAction(isMobile));
    }, [isMobile, dispatch]);

    useEffect(()=>{
        dispatch(isTabletAction(isTablet));
    }, [isTablet, dispatch]);


    return (
        <Box
            display={'flex'}
            width={'100%'}
            height={'100%'}
            flexDirection={'column'}
            overflow='hidden'
            bg={'#f6f9fc'}
        >
            <NavBar />
            <Box
                width={'100%'}
                flexGrow={1}
                position={'relative'}
            >
                <ComponentSideBar />
                <Preview />
            </Box>
        </Box>
    )
}

export default Playground