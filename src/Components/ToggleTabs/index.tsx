import { css } from '@rocket.chat/css-in-js';
import { Tabs } from '@rocket.chat/fuselage';
import type { FC } from 'react';

const ToggleTabs: FC<{
  tabsItem: string[],
  onChange: (index: number) => void,
  selectedTab: number,
}> = ({ tabsItem, onChange, selectedTab }) => {
  const disableBorder = css`
    border-left: none !important;
    border-right: none !important;
    border-top: none !important;
    box-shadow: none !important;
    margin-right: 0 !important;
  `;
  return (
    <Tabs>
      {tabsItem.map((item: string, index: number) => (
        <Tabs.Item
          key={index}
          selected={selectedTab === index}
          onClick={() => onChange(index)}
          className={disableBorder}
          children={item}
        />
      ))}
    </Tabs>
  );
};

export default ToggleTabs;
