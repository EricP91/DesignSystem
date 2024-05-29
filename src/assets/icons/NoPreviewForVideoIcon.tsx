import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function NoPreviewForVideoIcon({ ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="36" height="37" viewBox="0 0 36 37" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.68769 6.34535C1.41087 6.66869 1.44411 7.15912 1.76194 7.44075L3.78906 9.23699C3.32616 9.47436 3 10.0421 3 10.7041V25.7694C3 26.6447 3.57018 27.3552 4.27273 27.3552H22.7273C23.0964 27.3552 23.4289 27.1591 23.6614 26.846L25.7356 28.684C26.0534 28.9656 26.5355 28.9318 26.8123 28.6084C27.0891 28.2851 27.0559 27.7946 26.7381 27.513L2.76439 6.2698C2.44656 5.98818 1.9645 6.022 1.68769 6.34535ZM24 10.7041V23.4495L7.52374 9.11833H22.7273C23.4298 9.11833 24 9.82877 24 10.7041ZM34.5 12.1578C34.5 11.0827 33.4283 10.3475 32.443 10.7468L27.4686 12.7625C26.2542 13.2543 25.5 14.5271 25.5 15.9037V20.5693C25.5 21.9464 26.2542 23.2187 27.4688 23.7105L32.4428 25.7267C33.4281 26.1261 34.5 25.3909 34.5 24.3157V12.1578Z"
        fill="white"
      />
    </SvgIcon>
  );
}