import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function PlusIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="11" width="16" height="2" rx="1" fill={fill} />
      <rect x="11" y="20" width="16" height="2" rx="1" transform="rotate(-90 11 20)" fill={fill} />
    </SvgIcon>
  );
}
