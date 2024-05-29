import { SvgIconProps } from '@mui/material';
import React from 'react';

export function VisitedLocationFacetIcon({ fill = '#9466B6', ...props }: SvgIconProps): JSX.Element {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="5" cy="5" r="4.5" fill={fill} stroke="#825AA0" />
    </svg>
  );
}
