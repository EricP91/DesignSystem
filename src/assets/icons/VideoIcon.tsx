import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function VideoIcon({ fill = 'white', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.27273 27.3553H22.7273C23.4298 27.3553 24 26.6448 24 25.7694V10.7042C24 9.82885 23.4298 9.11841 22.7273 9.11841H4.27273C3.57018 9.11841 3 9.82885 3 10.7042V25.7694C3 26.6448 3.57018 27.3553 4.27273 27.3553ZM34.5 12.1579C34.5 11.0827 33.4283 10.3476 32.443 10.7468L27.4686 12.7625C26.2542 13.2544 25.5 14.5271 25.5 15.9037V20.5693C25.5 21.9464 26.2542 23.2188 27.4688 23.7106L32.4428 25.7268C33.4281 26.1262 34.5 25.391 34.5 24.3158V12.1579Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
