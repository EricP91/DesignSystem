import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ScanIcon({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M4 18.6966V15.3838H5.09215V17.6045H7.31286V18.6966H4ZM16.6871 18.6966V17.6045H18.9078V15.3838H20V18.6966H16.6871ZM6.05688 16.6761V7.5931H7.51308V16.6761H6.05688ZM8.25939 16.6761V7.5931H9.02389V16.6761H8.25939ZM10.4801 16.6761V7.5931H11.9909V16.6761H10.4801ZM12.7554 16.6761V7.5931H14.9579V16.6761H12.7554ZM15.7224 16.6761V7.5931H16.4869V16.6761H15.7224ZM17.2332 16.6761V7.5931H17.9249V16.6761H17.2332ZM4 8.90368V5.59082H7.31286V6.68297H5.09215V8.90368H4ZM18.9078 8.90368V6.68297H16.6871V5.59082H20V8.90368H18.9078Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
