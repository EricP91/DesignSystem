import React from 'react';

import { SvgIcon } from '@mui/material';
import { SvgIconProps } from './types';

export function CalendarIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M5.90826 20C5.391 20 4.94364 19.8264 4.56619 19.4793C4.18873 19.1321 4 18.7314 4 18.2769V6.89704C4 6.41736 4.18873 6.0071 4.56619 5.66627C4.94364 5.32544 5.391 5.15503 5.90826 5.15503H7.14548V4H8.8021V5.15503H15.1769V4H16.8336V5.15503H18.0708C18.602 5.15503 19.0564 5.32544 19.4338 5.66627C19.8113 6.0071 20 6.41736 20 6.89704V18.2769C20 18.7314 19.8113 19.1321 19.4338 19.4793C19.0564 19.8264 18.602 20 18.0708 20H5.90826ZM5.90826 18.2769H18.0708V10.3432H5.90826V18.2769Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
