import { Story } from '@storybook/react';
import React from 'react';
import { MenuItem } from '@mui/material';
import MenuButton, { MenuButtonProps } from './MenuButton';
import { PendingSubmissionIcon, ReceiveIcon, ScanIcon } from '../../assets/icons';

export default {
  title: 'Components/Menu',
};

const ref: React.MutableRefObject<{ handleClose: () => void } | undefined> = { current: { handleClose: () => {} } };

const Template: Story<MenuButtonProps> = ({ children, buttonText, ...args }) => (
  <MenuButton buttonText={buttonText} ref={ref} {...args}>
    {children}
  </MenuButton>
);

export const WithButton = Template.bind({});
WithButton.args = {
  buttonText: 'Menu',
  variant: 'contained',
  buttonProps: {
    startIcon: <ReceiveIcon />,
  },
  children: (
    <>
      <MenuItem onClick={() => ref?.current?.handleClose()} disableRipple>
        <PendingSubmissionIcon />
        Menu Item 1
      </MenuItem>
      <MenuItem onClick={() => ref?.current?.handleClose()} disableRipple>
        <ScanIcon />
        Menu Item 2
      </MenuItem>
    </>
  ),
};
