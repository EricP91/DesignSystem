import { SvgIconProps } from '@mui/material';
import React from 'react';

export function SpinnerLoadingIcon(props?: SvgIconProps): JSX.Element {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 14c0 7.456-6.044 13.5-13.5 13.5S.5 21.456.5 14h2.454C2.954 20.1 7.9 25.046 14 25.046S25.045 20.1 25.045 14 20.1 2.955 14 2.955V.5C21.456.5 27.5 6.544 27.5 14z"
        fill="#0064CC"
      />
    </svg>
  );
}
