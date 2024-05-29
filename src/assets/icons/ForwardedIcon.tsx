import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function ForwardedIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 8.5V5L19 12L12 19V15.5H5V8.5H12Z" fill={fill} />
    </SvgIcon>
  );
}
