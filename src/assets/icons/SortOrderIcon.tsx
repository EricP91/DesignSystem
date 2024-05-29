import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function SortOrderIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M10.2222 17.3333H13.7778V15.5555H10.2222V17.3333ZM4 6.66663V8.4444H20V6.66663H4ZM6.66667 12.8888H17.3333V11.1111H6.66667V12.8888Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
