import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function MeatballsIcon({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12ZM18 14C16.9 14 16 13.1 16 12C16 10.9 16.9 10 18 10C19.1 10 20 10.9 20 12C20 13.1 19.1 14 18 14Z"
        fill={fill}
      />
    </SvgIcon>
  );
}