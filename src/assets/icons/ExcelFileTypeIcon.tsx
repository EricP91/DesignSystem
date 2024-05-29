import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ExcelFileTypeIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0_192_7720)">
        <path
          d="M3.01657 24C2.19779 24 1.49033 23.6968 0.894199 23.0905C0.298067 22.4841 0 21.7832 0 20.9876V3.04552C0 2.24082 0.298067 1.53206 0.894199 0.919249C1.49033 0.306416 2.19779 0 3.01657 0H20.9834C21.7892 0 22.4934 0.306416 23.0961 0.919249C23.6987 1.53206 24 2.24082 24 3.04552V20.9876C24 21.7832 23.6987 22.4841 23.0961 23.0905C22.4934 23.6968 21.7892 24 20.9834 24H3.01657Z"
          fill="#227447"
        />
        <path
          d="M12.0001 10.4481L14.1702 7.0003H16.9127L13.5422 11.9591L17.0001 17.0003H14.2259L12.0001 13.4976L9.77435 17.0003H7.00011L10.458 11.9591L7.08755 7.0003H9.83L12.0001 10.4481Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_192_7720">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}
