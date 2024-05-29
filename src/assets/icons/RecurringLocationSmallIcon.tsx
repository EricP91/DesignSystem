import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function RecurringLocationSmallIcon({ fill = '#3D5189', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28 13.2727C28 22.8182 16 31 16 31C16 31 4 22.8182 4 13.2727C4 10.0178 5.26428 6.89618 7.51472 4.5946C9.76515 2.29302 12.8174 1 16 1C19.1826 1 22.2348 2.29302 24.4853 4.5946C26.7357 6.89618 28 10.0178 28 13.2727Z"
        fill={fill}
        stroke="#2E3B5F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
