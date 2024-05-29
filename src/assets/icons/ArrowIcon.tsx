import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ArrowIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.42 5.42L12 4L4 12L12 20Z" />
    </SvgIcon>
  );
}
