import { usePrefersReducedMotion } from '@rocket.chat/fuselage-hooks';
import React, { ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import Line from './Line';
import Wrapper from './Wrapper';
import { stateType } from '../../../Store';

const BurgerIcon = ({ children}: { children?: ReactNode}): ReactElement => {
	const isReducedMotionPreferred = usePrefersReducedMotion();
	const { navMenuToggle } = useSelector((state: stateType) => state);

	return (
		<Wrapper>
			<Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
			<Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
			<Line animated={!isReducedMotionPreferred} moved={navMenuToggle} />
			{children}
		</Wrapper>
	);
};

export default BurgerIcon;