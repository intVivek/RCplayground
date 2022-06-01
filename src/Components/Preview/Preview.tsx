import React, { FC } from 'react';
import { useEffect } from 'react';
import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { useDispatch, useSelector } from 'react-redux';

import NavPanel from './NavPanel';
import Wrapper from './Wrapper';
import { stateType } from '../../Store';
import { editorToggleAction } from '../../Store/action';

const Preview: FC = () => {
	const { isMobile, isTablet } = useSelector((state: stateType) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(editorToggleAction(false));
	}, [isTablet, dispatch]);

	return (
		<Box
			display={'flex'}
			flexGrow={1}
			bg='#fff'
			height={'100%'}
			flexDirection={'column'}
			pis={isMobile ? '' : 'min(35%, 250px)'}
			className={css`
          transition: 0.5s ease;
      `}
		>
			<NavPanel />
			<Wrapper/>
		</Box>
	)
}

export default Preview;