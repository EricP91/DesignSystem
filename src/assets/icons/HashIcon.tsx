import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function HashIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8692 7.11052C18.9301 6.56161 18.5346 6.06719 17.9857 6.0062C17.4368 5.94521 16.9424 6.34075 16.8814 6.88966L16.4316 10.9379H13.5059L13.9311 7.11052C13.9921 6.56161 13.5966 6.06719 13.0477 6.0062C12.4988 5.94521 12.0044 6.34075 11.9434 6.88966L11.4936 10.9379H7.99994C7.44765 10.9379 6.99994 11.3856 6.99994 11.9379C6.99994 12.4902 7.44765 12.9379 7.99994 12.9379H11.2713L10.9449 15.8754H7.99994C7.44765 15.8754 6.99994 16.3231 6.99994 16.8754C6.99994 17.4277 7.44765 17.8754 7.99994 17.8754H10.7227L10.2975 21.7022C10.2365 22.2511 10.6321 22.7455 11.181 22.8065C11.7299 22.8675 12.2243 22.472 12.2853 21.9231L12.735 17.8754H15.6607L15.2355 21.7022C15.1746 22.2511 15.5701 22.7455 16.119 22.8065C16.6679 22.8675 17.1623 22.472 17.2233 21.9231L17.6731 17.8754H21.1666C21.7189 17.8754 22.1666 17.4277 22.1666 16.8754C22.1666 16.3231 21.7189 15.8754 21.1666 15.8754H17.8953L18.2217 12.9379H21.1666C21.7189 12.9379 22.1666 12.4902 22.1666 11.9379C22.1666 11.3856 21.7189 10.9379 21.1666 10.9379H18.4439L18.8692 7.11052ZM16.2094 12.9379H13.2837L12.9573 15.8754H15.883L16.2094 12.9379Z"
        fill="#FC6766"
      />
    </SvgIcon>
  );
}
