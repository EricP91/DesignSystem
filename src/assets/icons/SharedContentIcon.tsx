import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function SharedContentIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect width="24" height="24" fill="none" />
      <path
        d="M12.8667 8.93333V6L18 11.1333L12.8667 16.2667V13.26C9.2 13.26 6.63333 14.4333 4.8 17C5.53333 13.3333 7.73333 9.66667 12.8667 8.93333Z"
        fill="black"
      />
    </SvgIcon>
  );
}
