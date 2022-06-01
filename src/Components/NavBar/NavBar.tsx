import React, { useState, FC } from 'react';
import { Box, Tile, Flex } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';

import Logo from './Logo';
import Divider from './Divider';
import BurgerIcon from './BurgerIcon';

const NabBar: FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<Flex.Container alignItems='center'>
			<Box
				position='relative'
				width={'100%'}
				height={'min(60px, 15vw)'}
				is={Tile}
				padding={'0px'}
				zIndex={'100'}
				elevation={'2'}
			>
				<Logo />
				<Divider />
				<Box position='absolute' className={css`right: 20px;`} onClick={() => setOpen(!open)}>
					<BurgerIcon open={open} />
				</Box>
			</Box>
		</Flex.Container>

	)
}

export default NabBar