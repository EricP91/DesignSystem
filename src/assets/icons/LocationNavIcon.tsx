import { SvgIcon } from '@mui/material';
import React from 'react';
import { SvgIconProps } from './types';

export function LocationNavIcon({ fill = '#0152A6', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <ellipse cx="11.9999" cy="9.4285" rx="1.54288" ry="1.54288" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.7998 10.1281C4.83929 6.17974 8.05135 2.9998 11.9999 3C15.9484 2.9998 19.1605 6.17974 19.2 10.1281C19.2 15.0602 12.8999 20.5502 12.5849 20.7842C12.2481 21.0723 11.7517 21.0723 11.4149 20.7842L11.4134 20.7829C11.1227 20.531 4.7998 15.0515 4.7998 10.1281ZM8.84956 9.75005C8.84956 11.4898 10.2599 12.9001 11.9996 12.9001C12.835 12.9001 13.6363 12.5682 14.227 11.9775C14.8178 11.3867 15.1496 10.5855 15.1496 9.75005C15.1496 8.01033 13.7393 6.60001 11.9996 6.60001C10.2599 6.60001 8.84956 8.01033 8.84956 9.75005Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
