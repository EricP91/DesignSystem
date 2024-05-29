import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function LocationIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect opacity="0.01" width="24" height="24" fill={fill} />
      <ellipse cx="12.0001" cy="9.99981" rx="1.2" ry="1.2" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.40002 10.544C6.43074 7.4731 8.92897 4.99985 12 5C15.0711 4.99985 17.5693 7.4731 17.6 10.544C17.6 14.38 12.7 18.65 12.455 18.832C12.1931 19.0561 11.807 19.0561 11.545 18.832L11.5439 18.831C11.3178 18.6351 6.40002 14.3733 6.40002 10.544ZM9.55007 10.25C9.55007 11.6031 10.647 12.7 12.0001 12.7C12.6499 12.7 13.273 12.4418 13.7325 11.9824C14.1919 11.5229 14.4501 10.8997 14.4501 10.25C14.4501 8.89686 13.3532 7.79996 12.0001 7.79996C10.647 7.79996 9.55007 8.89686 9.55007 10.25Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
