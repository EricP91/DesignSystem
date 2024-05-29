import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function UfdrFileIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="15" fillOpacity="0.18" />
      <path
        d="M11.75 9C11.3375 9 11.0075 9.3375 11.0075 9.75L11 20.25C11 20.6625 11.33 21 11.75 21H19.25C19.6625 21 20 20.6625 20 20.25V12.75L16.25 9H11.75ZM16.25 12.75V9.75L19.25 12.75H16.25Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
