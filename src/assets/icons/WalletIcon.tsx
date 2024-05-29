import React from 'react';

import { SvgIcon } from '@mui/material';
import { SvgIconProps } from './types';

export function WalletIcon({ fill = '#0064CC', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M18 5C18.5531 5 19 5.44781 19 6C19 6.55219 18.5531 7 18 7H6.5C6.22375 7 6 7.225 6 7.5C6 7.775 6.22375 8 6.5 8H18C19.1031 8 20 8.89687 20 10V17C20 18.1031 19.1031 19 18 19H6C4.89531 19 4 18.1031 4 17V7C4 5.89531 4.89531 5 6 5H18ZM17 14.5C17.5531 14.5 18 14.0531 18 13.5C18 12.9469 17.5531 12.5 17 12.5C16.4469 12.5 16 12.9469 16 13.5C16 14.0531 16.4469 14.5 17 14.5Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
