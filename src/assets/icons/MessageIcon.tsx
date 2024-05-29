import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function MessageIcon({ fill, ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.8 2H3.2C2.54 2 2 2.54 2 3.2V14L4.4 11.6H12.8C13.46 11.6 14 11.06 14 10.4V3.2C14 2.54 13.46 2 12.8 2Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
