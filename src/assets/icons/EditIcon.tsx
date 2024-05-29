import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function EditIcon({ fill = '#5E6974', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.74 6.33968C20.0866 6.68629 20.0866 7.24622 19.74 7.59283L18.1136 9.21928L14.7807 5.8864L16.4071 4.25996C16.7538 3.91335 17.3137 3.91335 17.6603 4.25996L19.74 6.33968ZM4 20V16.6671L13.8297 6.8374L17.1626 10.1703L7.33287 20H4Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
