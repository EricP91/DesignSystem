import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function MailIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM12.5 10.47L19 6H5L11.5 10.47C11.8094 10.6486 12.1906 10.6486 12.5 10.47Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
