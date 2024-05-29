import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function OtherLocationCircleIcon({ fill = '#868686', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <circle cx="8" cy="8" r="7.5" fill={fill} stroke="#757575" />
    </SvgIcon>
  );
}
