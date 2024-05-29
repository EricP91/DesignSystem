import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ReplyIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        d="M10.3333 9.49996V6.16663L4.5 12L10.3333 17.8333V14.4166C14.5 14.4166 17.4167 15.75 19.5 18.6666C18.6667 14.5 16.1667 10.3333 10.3333 9.49996Z"
        fill="#121E28"
      />
    </SvgIcon>
  );
}
