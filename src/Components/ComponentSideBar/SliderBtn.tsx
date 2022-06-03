import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Label } from '@rocket.chat/fuselage';
import { css } from '@rocket.chat/css-in-js';
import { stateType } from '../../Store';
import { sidebarToggleAction } from '../../Store/action';

const SliderBtn: FC = () => {
	const { isMobile, sideBarToggle } = useSelector((state: stateType) => state);
	const dispatch = useDispatch();

	const slideBtnAnimation = sideBarToggle
		? css`
			clip-path: polygon(10% 0, 50% 40%, 90% 0, 100% 10%, 60% 50%, 100% 90%, 90% 100%, 50% 60%, 10% 100%, 0 90%, 40% 50%, 0 10%);
			cursor: pointer;
			transition: 0.5s ease;
		`: css`
			clip-path: polygon(32% 35%, 32% 35%, 79% 0, 87% 10%, 32% 50%, 87% 90%, 79% 100%, 32% 64%, 32% 65%, 13% 50%, 13% 50%, 13% 50%);
			transform: rotate(180deg);
			transition: 0.5s ease;

    `;

	const toggleStyle = !isMobile? css`left: 0px;`:sideBarToggle ? 
		css`
			right: 0; transition: 0.5s ease;
		`:css`
			right: 0;transform: translateX(100%); cursor: pointer; transition: 0.5s ease;
		`;

	return (
		<Box
			position={'absolute'}
			width={sideBarToggle ? '100%' : '130px'}
			paddingInlineStart={'20px'}
			height={'40px'}
			display='flex'
			alignItems='center'
			justifyContent={'space-between'}
			onClick={() => !sideBarToggle && dispatch(sidebarToggleAction(!sideBarToggle))}
			zIndex={'1'}
			className={toggleStyle}
		>
			<Label width='80px' className={isMobile && !sideBarToggle?css`cursor: pointer;`:''}>Components</Label>
			{isMobile && <Box
				width='40px'
				height='40px'
				display='flex'
				alignItems='center'
				justifyContent='center'
				onClick={() => sideBarToggle && dispatch(sidebarToggleAction(!sideBarToggle))}
				className={css`cursor: pointer;`}
			>
				<Box size='50%' bg='info' className={slideBtnAnimation}/>
			</Box>}
		</Box>
	)
}

export default SliderBtn