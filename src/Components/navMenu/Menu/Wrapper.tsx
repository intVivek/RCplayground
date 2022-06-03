import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';


const Wrapper = ({ children }: { children: ReactNode }): ReactElement => (

	<Box
		paddingBlockStart='80px'
		display='inline-flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='space-between'
		verticalAlign='middle'
		children={children}
		height='max-content'
		width='100%'
	/>
);

export default Wrapper;