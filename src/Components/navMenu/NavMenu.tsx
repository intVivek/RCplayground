import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { stateType } from '../../Store';
import Menu from './Menu';
import { navMenuToggleAction } from '../../Store/action';

const NavMenu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { navMenuToggle } = useSelector((state: stateType) => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        setIsOpen(navMenuToggle);
    },[navMenuToggle]);

    const toggleHandler = () => {
        setIsOpen(false);
        setTimeout(()=>{
            dispatch(navMenuToggleAction(false))
        }, 300)
    }

    return (
        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={3}
            display={'flex'}
            bg={isOpen?'#000000cc':'transparent'}
            className={css`transition: 0.3s ease;`}
            overflow='hidden'
            onClick={toggleHandler}
        >   
            <Menu isOpen={isOpen}/>
        </Box>
    )
}

export default NavMenu