import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ItemIcon({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 18V5.5C18 4.67188 17.3281 4 16.5 4H7.5C6.67188 4 6 4.67188 6 5.5V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18ZM7.2 6.1C7.42091 5.93431 7.73431 5.97909 7.9 6.2L8.8 7.4C9.08328 7.77771 9.52786 8 10 8H12H14C14.4721 8 14.9167 7.77771 15.2 7.4L16.1 6.2C16.2657 5.97909 16.5791 5.93431 16.8 6.1C17.0209 6.26569 17.0657 6.57909 16.9 6.8L16 8C15.5279 8.62951 14.7869 9 14 9H12H10C9.21311 9 8.47214 8.62951 8 8L7.1 6.8C6.93431 6.57909 6.97909 6.26569 7.2 6.1ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
