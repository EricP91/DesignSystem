import { Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import OverflowTooltip, { OverflowTooltipProps } from './OverflowTooltip';

export default {
  title: 'Components/Tooltip',
};

const Template: Story<OverflowTooltipProps> = (args): JSX.Element => {
  const { children } = args;
  return (
    <div style={{ maxWidth: 200 }}>
      <OverflowTooltip placement="top" arrow {...args}>
        {children}
      </OverflowTooltip>
    </div>
  );
};

export const ShortText = Template.bind({});

ShortText.args = {
  title: 'This is short text on one row',
  children: (
    <Typography noWrap variant="caption">
      This is short text on one row
    </Typography>
  ),
};

export const LongText = Template.bind({});

LongText.args = {
  title: 'This is long long long long long long long long long long long long long long long long text',
  children: (
    <Typography noWrap variant="caption">
      This is long long long long long long long long long long long long long long long long text
    </Typography>
  ),
};

export const VeryLongText = Template.bind({});

VeryLongText.args = {
  title:
    'This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long text',
  children: (
    <Typography noWrap variant="caption">
      This ia very very very very very very very very very very very very very very very very very very very very very
      very very very very very very very very very very very very very very very very very very very very very very very
      very very very very very very very very very very long text
    </Typography>
  ),
};

export const MiddleEllipsis = Template.bind({});

MiddleEllipsis.args = {
  isMiddleEllipsis: true,
  title:
    'This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long file name.ufdr',
  children: (
    <Typography variant="caption">
      This is very very very very very very very very very very very very very very very very very very very very very
      very very very very very very very very long file name.ufdr
    </Typography>
  ),
};

export const LeftEllipsis = Template.bind({});

LeftEllipsis.args = {
  isLeftEllipsis: true,
  title:
    'This is very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long file name.ufdr',
  children: (
    <Typography variant="caption">
      This is very very very very very very very very very very very very very very very very very very very very very
      very very very very very very very very long file name.ufdr
    </Typography>
  ),
};
