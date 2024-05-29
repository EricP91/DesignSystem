import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function InfoIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect opacity="0.01" x="21" y="21" width="18" height="18" transform="rotate(180 21 21)" fill="#121E28" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 10.0109 18.7098 8.10322 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5ZM12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V11.25C11.25 10.8358 11.5858 10.5 12 10.5C12.4142 10.5 12.75 10.8358 12.75 11.25V15ZM11.25 9C11.25 9.41421 11.5858 9.75 12 9.75C12.4142 9.75 12.75 9.41421 12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
