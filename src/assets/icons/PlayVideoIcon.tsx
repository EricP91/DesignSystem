import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function PlayVideoIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="31" height="38" viewBox="0 0 31 38" fill="none" {...props}>
      <path
        d="M29.6267 18.1507C30.4034 18.6446 30.4034 19.7784 29.6267 20.2723L2.72014 37.3832C1.88322 37.9154 0.788391 37.3142 0.788391 36.3224L0.788391 2.10067C0.788391 1.10884 1.88321 0.507627 2.72014 1.03986L29.6267 18.1507Z"
        fill="white"
      />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="38">
        <path
          d="M29.6267 18.1507C30.4034 18.6446 30.4034 19.7784 29.6267 20.2723L2.72014 37.3832C1.88322 37.9154 0.788391 37.3142 0.788391 36.3224L0.788391 2.10067C0.788391 1.10884 1.88321 0.507627 2.72014 1.03986L29.6267 18.1507Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)" />
    </SvgIcon>
  );
}
