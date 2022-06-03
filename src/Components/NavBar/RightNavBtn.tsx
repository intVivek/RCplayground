import React, { FC } from 'react'
import { Box, Button } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { useSelector, useDispatch } from 'react-redux';

import BurgerIcon from './BurgerIcon';
import { navMenuToggleAction } from '../../Store/action/navMenuToggleAction';
import { stateType } from '../../Store';

const RightNavBtn: FC = () => {
    const dispatch = useDispatch();
	const { isMobile } = useSelector((state: stateType) => state);

    return (
        <Box
            position='absolute'
            className={css`right: 20px;`}
            onClick={() => isMobile && dispatch(navMenuToggleAction(true))}
        >
            {isMobile ? <BurgerIcon /> : <Button danger primary>Send to RocketChat</Button>}
        </Box>
    )
}

export default RightNavBtn