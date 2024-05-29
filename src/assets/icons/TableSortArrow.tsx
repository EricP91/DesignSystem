import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function TableSortArrow({ fill, ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 13.5177L16.5953 12L13 15.8843L13 4L11 4L11 15.8843L7.40475 12L6 13.5177L12 20L18 13.5177Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
