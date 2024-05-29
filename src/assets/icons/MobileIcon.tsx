import { SvgIconProps } from '@mui/material';
import React from 'react';

export function MobileIcon(props?: SvgIconProps): JSX.Element {
  return (
    <svg width={28} height={40} viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.875 1.776c0-.807.68-1.463 1.514-1.463H25.61c.834 0 1.515.656 1.515 1.463V38.225c0 .807-.68 1.463-1.515 1.463H2.39c-.835 0-1.515-.656-1.515-1.463V1.775zm23.221 28.068v1.97H3.904V4.25h20.192v25.593zm-12.477 6.688a.996.996 0 01-1.01-.984.998.998 0 011.01-.985h5.41a.998.998 0 011.01.985.996.996 0 01-1.01.984h-5.41z"
        fill="#0064CC"
      />
    </svg>
  );
}
