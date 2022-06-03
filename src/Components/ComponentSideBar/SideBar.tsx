import React, { FC, useEffect } from 'react';
import { Box } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { useDispatch, useSelector } from 'react-redux';

import ScrollableSideBar from './ScrollableSideBar';
import SliderBtn from './SliderBtn';
import { stateType } from '../../Store';
import { sidebarToggleAction } from '../../Store/action';

const SideBar: FC = () => {

	const { isMobile, sideBarToggle } = useSelector((state: stateType) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(sidebarToggleAction(false));
	}, [isMobile, dispatch]);

	const slide = isMobile
		? css`
			width: 100%;
			transform: translateX(${sideBarToggle ? '0' : '-100%'});
			transition: 0.5s ease;
		`: css`
			width: min(35%, 250px);
			transition: 0.5s ease;
      `;

	return (
		<Box
			position={'absolute'}
			height={'100%'}
			display={'flex'}
			zIndex={1}
			className={[slide]}
			elevation={'1'}
		>
			<ScrollableSideBar />
			<SliderBtn />
		</Box>
	)
}

export default SideBar