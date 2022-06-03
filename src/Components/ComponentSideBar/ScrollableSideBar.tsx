import React, { FC } from 'react'
import { Scrollable, Box } from '@rocket.chat/fuselage';
import SearchBar from './SearchBar';

const ScrollableSideBar: FC = () => {
	return (
		<Scrollable vertical>
			<Box
				flexGrow={1}
				bg={'#f6f9fc'}
			>
				<SearchBar />
			</Box>
		</Scrollable>
	)
}

export default ScrollableSideBar