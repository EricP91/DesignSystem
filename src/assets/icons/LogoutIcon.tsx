import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function LogoutIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M12.7778 5H11.2222V12.7778H12.7778V5ZM16.5344 6.68778L15.43 7.79222C16.6589 8.78 17.4444 10.2967 17.4444 12C17.4444 15.01 15.01 17.4444 12 17.4444C8.99 17.4444 6.55556 15.01 6.55556 12C6.55556 10.2967 7.34111 8.78 8.56222 7.78444L7.46556 6.68778C5.95667 7.97111 5 9.86889 5 12C5 15.8656 8.13444 19 12 19C15.8656 19 19 15.8656 19 12C19 9.86889 18.0433 7.97111 16.5344 6.68778Z"
        fill="#637381"
      />
    </SvgIcon>
  );
}
