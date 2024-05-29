import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function VisitedLocationCircleIcon({ fill = '#BC6A6A', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <circle cx="8" cy="8" r="7.5" fill={fill} stroke="#B06464" />
    </SvgIcon>
  );
}
