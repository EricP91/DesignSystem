import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function HashDataIcon({ fill = '#5E6974', strokeWidth = 2, ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.7916 5.33337H7.20877C6.17472 5.33337 5.3335 6.26391 5.3335 7.40845V24.5916C5.3335 25.7362 6.17472 26.6667 7.20877 26.6667H24.7916C25.8256 26.6667 26.6668 25.7362 26.6668 24.5916V7.40845C26.6668 6.26391 25.8256 5.33337 24.7916 5.33337Z"
        fill={fill}
        stroke={fill}
        strokeWidth={strokeWidth}
      />
      <path
        d="M21.3337 22.6667H18.6332V16.9524H13.3674V22.6667H10.667V9.33337H13.3674V14.7363H18.6332V9.33337H21.3337V22.6667Z"
        fill="white"
      />
    </SvgIcon>
  );
}
