import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function CheckedIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.4265 7.29344C18.8092 7.68406 18.8092 8.31531 18.4265 8.70594L10.5898 16.7059C10.2071 17.0966 9.58878 17.0966 9.20612 16.7059L5.2869 12.7059C4.90437 12.3153 4.90437 11.6841 5.2869 11.2934C5.66949 10.9028 6.28969 10.9028 6.67235 11.2934L9.87041 14.5841L17.0429 7.29344C17.4255 6.90219 18.0439 6.90219 18.4265 7.29344Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
