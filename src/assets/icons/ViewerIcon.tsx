import { SvgIconProps } from '@mui/material';
import React from 'react';

export function ViewerIcon(props?: SvgIconProps): JSX.Element {
  return (
    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.444 7A.778.778 0 0114 7v4.667A2.333 2.333 0 0111.667 14H2.333A2.333 2.333 0 010 11.667V2.333A2.333 2.333 0 012.333 0H7a.778.778 0 010 1.556H2.333a.778.778 0 00-.777.777v9.334c0 .43.348.777.777.777h9.334c.43 0 .777-.348.777-.777V7zM11.34 1.556h-1.229a.778.778 0 010-1.556h3.111c.43 0 .778.348.778.778v3.11a.778.778 0 11-1.556 0V2.66L7.552 7.544a.778.778 0 01-1.104 0 .778.778 0 010-1.104l4.892-4.884z"
        fill="#121E28"
      />
    </svg>
  );
}
