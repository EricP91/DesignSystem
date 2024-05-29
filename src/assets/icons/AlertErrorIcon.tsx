import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function AlertErrorIcon({ ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8766 19.999C9.79948 19.967 7.81432 19.128 6.34314 17.6569C4.84285 16.1566 4 14.1217 4 12C4 7.58172 7.58172 4 12 4C16.3769 4 19.9328 7.51488 19.9991 11.876C19.9324 16.3321 16.3326 19.932 11.8766 19.999ZM12 8C11.5581 8 11.2 8.35817 11.2 8.79999L11.2 12.8C11.2 13.2418 11.5581 13.6 12 13.6C12.4418 13.6 12.8 13.2418 12.8 12.8V8.79999C12.8 8.35817 12.4418 8 12 8ZM12 14.4C12.4418 14.4 12.8 14.7582 12.8 15.2C12.8 15.6418 12.4418 16 12 16C11.5581 16 11.2 15.6418 11.2 15.2C11.2 14.7582 11.5581 14.4 12 14.4Z"
        fill="#D30813"
      />
    </SvgIcon>
  );
}
