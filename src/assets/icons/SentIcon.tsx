import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function SentIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity="0.01" x="2" y="2" width="20" height="20" fill={fill} />
      <path
        d="M10.2167 16.9999C9.98571 16.9992 9.76541 16.9026 9.60835 16.7333L5.55835 12.4249C5.24308 12.089 5.25987 11.561 5.59585 11.2458C5.93182 10.9305 6.45975 10.9473 6.77501 11.2833L10.2083 14.9416L17.2167 7.27495C17.4105 7.03363 17.722 6.91959 18.0258 6.97879C18.3296 7.03799 18.5756 7.26068 18.6646 7.55711C18.7536 7.85354 18.671 8.17487 18.45 8.39162L10.8333 16.7249C10.6778 16.8974 10.4573 16.9971 10.225 16.9999H10.2167Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
