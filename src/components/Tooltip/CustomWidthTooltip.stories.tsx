import { Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React from 'react';
import CustomWidthTooltip, { CustomWidthTooltipProps } from './CustomWidthTooltip';

export default {
  title: 'Components/Tooltip/CustomWidth',
};

const Template: Story<CustomWidthTooltipProps> = (args): JSX.Element => {
  const { children, tooltipProps, title } = args;
  return (
    <div style={{ maxWidth: 200 }}>
      <CustomWidthTooltip title={title} tooltipProps={tooltipProps}>
        {children}
      </CustomWidthTooltip>
    </div>
  );
};

export const SmallWidth = Template.bind({});

SmallWidth.args = {
  title: 'Small tooltip. Small tooltip. Small tooltip. Small tooltip. Small tooltip.',
  tooltipProps: {
    width: 120,
  },
  children: (
    <Typography noWrap variant="caption">
      This is a tooltip with a small width
    </Typography>
  ),
};

export const RegularWidth = Template.bind({});

RegularWidth.args = {
  title:
    'This tooltip has default width. This tooltip has default width. This tooltip has default width. This tooltip has default width. This tooltip has default width.',
  children: (
    <Typography noWrap variant="caption">
      This is a tooltip with a standard width
    </Typography>
  ),
};

export const WideWidth = Template.bind({});

WideWidth.args = {
  title:
    'This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip. This is a wide tooltip.',
  tooltipProps: {
    width: 600,
    direction: 'right',
  },
  children: (
    <Typography noWrap variant="caption">
      This is a tooltip is wide
    </Typography>
  ),
};
