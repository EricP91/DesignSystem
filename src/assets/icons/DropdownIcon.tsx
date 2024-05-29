import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function DropdownIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9H6Z" fill="#5E6974" />
    </SvgIcon>
  );
}
