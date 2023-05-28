import {
  UiKitModal as uiKitModal,
  UiKitBanner as uiKitBanner,
  UiKitMessage as uiKitMessage,
} from '@rocket.chat/fuselage-ui-kit';
import type { LayoutBlock } from '@rocket.chat/ui-kit';
import React from 'react';

import { SurfaceOptions } from '../Surface/constant';

const RenderPayload = ({
  payload,
  surface=1,
}: {
  index?: number,
  payload: readonly LayoutBlock[],
  surface?: number,
}) => (
    <>     
      {SurfaceOptions.Message === surface && uiKitMessage(payload)}
      {SurfaceOptions.Banner === surface && uiKitBanner(payload)}
      {SurfaceOptions.Modal === surface && uiKitModal(payload)}
    </>
  );

export default RenderPayload;
