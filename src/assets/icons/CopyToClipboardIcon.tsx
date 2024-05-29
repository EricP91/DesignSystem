import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export interface CopyToClipboardIconProps extends SvgIconProps {
  pathTagClassName?: string;
}

export function CopyToClipboardIcon({
  fill = '#121E28',
  pathTagClassName,
  ...props
}: CopyToClipboardIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        className={pathTagClassName}
        id="Path"
        d="M10.4167 16.4999C9.11502 16.4999 8.05555 15.4404 8.05555 14.1387V8.44434H7.08336C6.24056 8.44434 5.55554 9.12925 5.55554 9.97205V17.4721C5.55554 18.3149 6.24056 18.9999 7.08336 18.9999H14.0277C14.8705 18.9999 15.5556 18.3149 15.5556 17.4721V16.4999H10.4167Z"
        fill={fill}
      />
      <path
        className={pathTagClassName}
        id="Path_2"
        d="M17.7777 6.62967C17.7777 5.72949 17.0938 5 16.2499 5H10.4166C9.57269 5 8.88879 5.72949 8.88879 6.62967V14.037C8.88879 14.9372 9.57269 15.6667 10.4166 15.6667H16.2499C17.0938 15.6667 17.7777 14.9372 17.7777 14.037V6.62967Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
