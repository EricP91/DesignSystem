import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function PhoneIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="15" fillOpacity="0.18" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8335 8.82859C10.8335 8.55525 11.0495 8.33325 11.3143 8.33325H18.6861C18.9508 8.33325 19.1668 8.55525 19.1668 8.82859V18.3333V18.9999V21.1713C19.1668 21.4446 18.9508 21.6666 18.6861 21.6666H11.3143C11.0495 21.6666 10.8335 21.4446 10.8335 21.1713V8.82859ZM17.6284 17.4047V17.9999H12.6284V9.66658H17.6284V17.4047ZM14.2444 20.5979C14.0675 20.5979 13.9239 20.4493 13.9239 20.2646C13.9239 20.0806 14.0675 19.9313 14.2444 19.9313H15.9617C16.1386 19.9313 16.2822 20.0806 16.2822 20.2646C16.2822 20.4493 16.1386 20.5979 15.9617 20.5979H14.2444Z"
        fill="#0064CC"
      />
    </SvgIcon>
  );
}
