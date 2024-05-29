import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function ChatIcon({ fill = 'inherit', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5835 4.66659V11.0833C16.5835 12.0916 15.7585 12.9166 14.7502 12.9166H6.50016L2.8335 16.5833V4.66659C2.8335 3.65825 3.6585 2.83325 4.66683 2.83325H14.7502C15.7585 2.83325 16.5835 3.65825 16.5835 4.66659ZM18.4167 6.5H19.3333C20.3417 6.5 21.1667 7.325 21.1667 8.33333V21.1667L17.5 17.5H8.33333C7.325 17.5 6.5 16.675 6.5 15.6667V14.75H17.5C18.0042 14.75 18.4167 14.3375 18.4167 13.8333V6.5Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
