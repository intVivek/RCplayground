import React, { FC } from 'react'
import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';

import { useSelector} from "react-redux";


import { stateType } from '../../../Store';

const Editor: FC = () => {
	
	const { isTablet } = useSelector((state: stateType) => state);

	const editor = css`

    `;

	return (
		<Box
			width={isTablet ? '50%' : '40%'}
			height={'100%'}
			bg={'#f6f9fc'}
			className={editor}
		>
		</Box>
	)
}

export default Editor