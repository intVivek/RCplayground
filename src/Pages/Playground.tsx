import React, { FC, useEffect } from 'react'
import { Box } from '@rocket.chat/fuselage';
import { useSelector } from 'react-redux';
import { useMediaQueries } from '@rocket.chat/fuselage-hooks';
import { useDispatch } from 'react-redux';

import NavBar from '../Components/NavBar';
import NavMenu from '../Components/navMenu';
import Preview from '../Components/Preview';
import ComponentSideBar from '../Components/ComponentSideBar';
import { isMobileAction, isTabletAction } from '../Store/action';
import { stateType } from '../Store';

const Playground: FC = () => {
    const { navMenuToggle } = useSelector((state: stateType) => state);
    const [isMobile, isTablet] = useMediaQueries('(max-width: 500px)', '(max-width: 1050px)');
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
            {navMenuToggle && <NavMenu />}
            <Box
                width={'100%'}
                flexGrow={1}
                position={'relative'}
                zIndex={0}
            >
                <ComponentSideBar />
                <Preview />
            </Box>
        </Box>
    )
}

export default Playground