import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function CheckIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect opacity="0.01" x="0.274065" y="0.27417" width="24" height="24" fill="#44AF69" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.34258 12.6851C2.34258 6.97307 6.97312 2.34253 12.6852 2.34253C15.4282 2.34253 18.0589 3.43219 19.9985 5.3718C21.9381 7.31142 23.0278 9.9421 23.0278 12.6851C23.0278 18.3972 18.3972 23.0277 12.6852 23.0277C6.97312 23.0277 2.34258 18.3972 2.34258 12.6851ZM12.4059 16.4188L17.1325 10.2132V10.1822C17.3579 9.88661 17.4085 9.49321 17.2652 9.15021C17.1219 8.8072 16.8065 8.56671 16.4378 8.51931C16.0691 8.47191 15.7031 8.62481 15.4777 8.92042L11.5682 14.0917L9.88233 11.9405C9.65509 11.6485 9.28937 11.5 8.92295 11.5509C8.55652 11.6017 8.24506 11.8442 8.10588 12.187C7.9667 12.5297 8.02096 12.9207 8.2482 13.2126L10.7718 16.4291C10.9692 16.6789 11.2705 16.8239 11.5889 16.8222C11.909 16.8214 12.2107 16.6724 12.4059 16.4188Z"
        fill="#44AF69"
      />
    </SvgIcon>
  );
}