import { Box, styled, Typography } from '@mui/material';
import { Story } from '@storybook/react';
import React, { FC } from 'react';

import OverflowTooltip from '../../components/Tooltip/OverflowTooltip';
import * as icons from './index';

export default {
  title: 'Guidelines/Icons',
};

const IconWrapper = styled(Box)(({ theme }) => ({
  height: 70,
  width: 70,
  textAlign: 'center',

  '& svg': {
    height: 24,
    width: 24,
    '& > path': {
      fill: theme.palette.ui.mutedDark,
    },
  },
}));

const IconLabel = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(1),
}));

const Template: Story = () => {
  const excludeIcons: string[] = [
    'JumbotronIcon',
    'JumbotronSkeletonIcon',
    'NoDeviceInfoIcon',
    'NoResultsIcon',
    'MobileIcon',
    'SpinnerLoadingIcon',
    'RedactedIcon',
  ];
  const components = Object.keys(icons)
    .filter((key) => !excludeIcons.includes(key))
    .map((key) => (key !== 'Base64CheckboxCheckSvg' ? (icons as unknown as Record<string, FC>)[key] : undefined));

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
      {components.map(
        (Component) =>
          Component && (
            <IconWrapper key={Component.name}>
              <Component />
              <OverflowTooltip title={Component.name} key={Component.name}>
                <IconLabel variant="xSmallBold">{Component.name}</IconLabel>
              </OverflowTooltip>
            </IconWrapper>
          )
      )}
    </Box>
  );
};

export const Icons = Template.bind({});
