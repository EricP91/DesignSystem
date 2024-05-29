import { SvgIconProps } from '@mui/material';
import React from 'react';

export function WarningTriangleIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="warning-icon"
      {...props}
    >
      <path opacity={0.01} fill="#0064CC" d="M20 0v20H0V0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8 13.583l-6.392-10.6a2.859 2.859 0 00-4.816 0L1.2 13.583a2.5 2.5 0 00-.042 2.5 2.808 2.808 0 002.45 1.417h12.784a2.808 2.808 0 002.45-1.383 2.5 2.5 0 00-.042-2.534zM10 14.667A1.333 1.333 0 1110 12a1.333 1.333 0 010 2.667zm0-3.5a1 1 0 001-1v-3a1 1 0 00-2 0v3a1 1 0 001 1z"
        fill={fill}
      />
    </svg>
  );
}
