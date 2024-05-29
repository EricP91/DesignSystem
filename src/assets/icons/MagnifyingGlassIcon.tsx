import { SvgIconProps } from '@mui/material';
import React from 'react';

export function MagnifyingGlassIcon(props?: SvgIconProps): JSX.Element {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity={0.01} fill="#0064CC" d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.31 15.9l3.4 3.39a1 1 0 010 1.42 1 1 0 01-1.42 0l-3.39-3.4A7.92 7.92 0 0111 19a8 8 0 118-8 7.92 7.92 0 01-1.69 4.9zM11 5a6 6 0 100 12 6 6 0 000-12z"
        fill="#0064CC"
      />
      <path d="M13.5 11h-5a1 1 0 110-2h5a1 1 0 110 2zM11.5 14h-3a1 1 0 110-2h3a1 1 0 110 2z" fill="#0064CC" />
    </svg>
  );
}
