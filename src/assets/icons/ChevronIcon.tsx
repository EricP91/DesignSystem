import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ChevronIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path d="M4.75 7.125L9.5 11.875L14.25 7.125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
}
