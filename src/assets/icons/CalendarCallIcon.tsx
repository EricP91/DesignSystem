import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function CalendarCallIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect width="24" height="24" viewBox="0 0 24 24" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5556 4V5.2973H8.44444V4H6.66667V5.2973H5.77778C4.79111 5.2973 4.00889 6.07568 4.00889 7.02703L4 18.2703C4 19.2216 4.79111 20 5.77778 20H18.2222C19.2 20 20 19.2216 20 18.2703V7.02703C20 6.07568 19.2 5.2973 18.2222 5.2973H17.3333V4H15.5556ZM16.4443 13.0813H12.8888V16.5408H16.4443V13.0813ZM5.77849 18.2702H18.2229V9.62155H5.77849V18.2702Z"
        fill="#121E28"
      />
    </SvgIcon>
  );
}
