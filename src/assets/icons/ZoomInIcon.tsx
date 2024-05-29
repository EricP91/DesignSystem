import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ZoomInIcon({ fill = '#E7ECF1', stroke = '#E7ECF1', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7201 15.4668L19.7424 18.4801C19.9107 18.6471 20.0053 18.8743 20.0053 19.1113C20.0053 19.3483 19.9107 19.5755 19.7424 19.7424C19.5755 19.9107 19.3483 20.0053 19.1113 20.0053C18.8743 20.0053 18.6471 19.9107 18.4801 19.7424L15.4668 16.7201C14.2245 17.6952 12.6904 18.2243 11.1112 18.2224C7.18378 18.2224 4 15.0386 4 11.1112C4 7.18378 7.18378 4 11.1112 4C15.0386 4 18.2224 7.18378 18.2224 11.1112C18.2243 12.6904 17.6952 14.2245 16.7201 15.4668ZM11.111 5.77777C8.16549 5.77777 5.77765 8.16561 5.77765 11.1112C5.77765 14.0567 8.16549 16.4445 11.111 16.4445C14.0566 16.4445 16.4444 14.0567 16.4444 11.1112C16.4444 8.16561 14.0566 5.77777 11.111 5.77777Z"
        fill={fill}
      />
      <rect x="8" y="10.625" width="6" height="0.75" rx="0.375" fill={fill} stroke={stroke} strokeWidth="0.6" />
      <rect
        x="10.625"
        y="14"
        width="6"
        height="0.75"
        rx="0.375"
        transform="rotate(-90 10.625 14)"
        fill={fill}
        stroke={stroke}
        strokeWidth="0.6"
      />
    </SvgIcon>
  );
}
