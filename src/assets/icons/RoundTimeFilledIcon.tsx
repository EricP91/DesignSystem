import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function RoundTimeFilledIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 12C4 7.58172 7.58172 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 12.8H15.2C15.6418 12.8 16 12.4418 16 12C16 11.5582 15.6418 11.2 15.2 11.2H12.8V8.8C12.8 8.35817 12.4418 8 12 8C11.5582 8 11.2 8.35817 11.2 8.8V12C11.2 12.4418 11.5582 12.8 12 12.8Z"
        fill="#121E28"
      />
    </SvgIcon>
  );
}
