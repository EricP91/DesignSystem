import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function FileIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M7.62499 5C7.14374 5 6.75875 5.39374 6.75875 5.87499L6.75 18.1248C6.75 18.6061 7.13499 18.9998 7.62499 18.9998H16.3749C16.8561 18.9998 17.2499 18.6061 17.2499 18.1248V9.37494L12.8749 5H7.62499ZM12.8749 9.37494V5.87499L16.3749 9.37494H12.8749Z"
        fill="#121E28"
      />
    </SvgIcon>
  );
}
