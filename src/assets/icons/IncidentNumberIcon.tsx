import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function IncidentNumberIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="15" fillOpacity="0.18" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.857 14.1956V9.66655C10.857 9.29831 11.1045 9 11.4101 9H17.0208V11.5663C17.0208 12.0364 17.3176 12.2715 17.666 12.2715H19.4285V14.3749V15.3631H16.3678C16.3678 15.3631 15.363 14.1956 14.7649 14.1956H10.857ZM16.1224 16.2L15.1916 15.2878C15.0055 15.1054 14.7297 15 14.4393 15H10V16.2V17.8V20.2C10 20.6418 10.4386 21 10.9796 21H19.3061C19.8471 21 20.2857 20.6418 20.2857 20.2V16.2H16.1224ZM15.1428 10.2857H12.5714V11.1428H15.1428V10.2857ZM12.5714 12H15.1428V12.8571H12.5714V12ZM17.7143 11.1378V9L19.4286 11.5714H18.099C17.8865 11.5714 17.7143 11.3774 17.7143 11.1378Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
