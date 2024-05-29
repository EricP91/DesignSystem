import { Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import Popper, { PopperProps } from './Popper';

export default {
  title: 'Components/Popper',
};

const Template: Story<PopperProps> = (args): JSX.Element => {
  const { children, placement, arrow, isPopperOpen = false } = args;
  const [popperOpen, setPopperOpen] = useState(isPopperOpen);
  const [popperAnchor, setPopperAnchor] = useState<HTMLElement | null>(null);

  const togglePopper: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setPopperAnchor(event.currentTarget);
    setPopperOpen(!popperOpen);
  };

  return (
    <div style={{ maxWidth: 200 }}>
      <button type="button" onClick={togglePopper}>
        Toggle Popper
      </button>
      <Popper isPopperOpen={popperOpen} placement={placement} popperAnchor={popperAnchor} arrow={arrow}>
        {children}
      </Popper>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placement: 'bottom',
  arrow: true,
  children: (
    <Typography noWrap variant="caption" color="white">
      This is short text on one row
    </Typography>
  ),
};
