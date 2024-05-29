import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function MessageInfoIcon({ fill = '#1E2C3F', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.2 2.28125H12.8C13.46 2.28125 14 2.82125 14 3.48125V10.6813C14 11.3413 13.46 11.8813 12.8 11.8813H8.6H4.4L2 14.2812V3.48125C2 2.82125 2.54 2.28125 3.2 2.28125ZM8.63479 9.54672C8.63479 9.89794 8.35007 10.1827 7.99885 10.1827C7.64763 10.1827 7.36292 9.89794 7.36292 9.54672V6.36703C7.36292 6.01582 7.64763 5.7311 7.99885 5.7311C8.35007 5.7311 8.63479 6.01582 8.63479 6.36703V9.54672ZM7.36292 4.45922C7.36292 4.81043 7.64763 5.09515 7.99885 5.09515C8.35007 5.09515 8.63479 4.81043 8.63479 4.45922C8.63479 4.108 8.35007 3.82328 7.99885 3.82328C7.64763 3.82328 7.36292 4.108 7.36292 4.45922Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
