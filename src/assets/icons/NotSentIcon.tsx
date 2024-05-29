import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function NotSentIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity="0.01" x="22" y="22" width="20" height="20" transform="rotate(180 22 22)" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66669 12C3.66669 7.39765 7.39765 3.66669 12 3.66669C14.2102 3.66669 16.3298 4.54466 17.8926 6.10746C19.4554 7.67027 20.3334 9.78988 20.3334 12C20.3334 16.6024 16.6024 20.3334 12 20.3334C7.39765 20.3334 3.66669 16.6024 3.66669 12ZM12 12.8333H15.3334C15.7936 12.8333 16.1667 12.4602 16.1667 11.9999C16.1667 11.5397 15.7936 11.1666 15.3334 11.1666H12.8334V8.66661C12.8334 8.20637 12.4603 7.83327 12 7.83327C11.5398 7.83327 11.1667 8.20637 11.1667 8.66661V11.9999C11.1667 12.4602 11.5398 12.8333 12 12.8333Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
