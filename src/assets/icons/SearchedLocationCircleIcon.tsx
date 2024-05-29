import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function SearchedLocationCircleIcon({ fill = '#B0AD67', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <circle cx="8" cy="8" r="7.5" fill={fill} stroke="#A5A25D" />
    </SvgIcon>
  );
}
