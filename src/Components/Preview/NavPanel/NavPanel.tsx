import React, { FC } from 'react';
import { Box, ButtonGroup, Button } from '@rocket.chat/fuselage';
import { useSelector } from 'react-redux';

import TabChange from './TabChange';
import { stateType } from '../../../Store';

const NavPanel: FC = () => {

	const { isMobile, isTablet } = useSelector((state: stateType) => state);

	return (
		<Box
			width={'100%'}
			height={'40px'}
			borderBlockEnd='1px solid #e6e6e6'
			display={'flex'}
			alignItems={'center'}
			justifyContent={'flex-end'}
		>
			{!isMobile && <ButtonGroup marginInlineEnd={'20px'}>
				<Button small>Clear Blocks</Button>
			</ButtonGroup>}
			{isTablet && <TabChange />}
		</Box>
	)
}

export default NavPanel