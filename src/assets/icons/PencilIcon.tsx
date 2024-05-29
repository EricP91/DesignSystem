import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function PencilIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2476 4.61005L21.3302 7.69258C22.1919 8.51357 22.2271 9.87697 21.4089 10.7414L11.2838 20.8665C10.9171 21.2301 10.4364 21.4565 9.92254 21.5077L5.23124 21.9352H5.12999C4.83096 21.937 4.54354 21.8196 4.33123 21.609C4.0939 21.3725 3.97429 21.0426 4.00498 20.709L4.48873 16.0177C4.53993 15.5038 4.76635 15.0231 5.12999 14.6564L15.2551 4.53129C16.1279 3.79391 17.4148 3.82777 18.2476 4.61005ZM14.4902 8.43515L17.5053 11.4502L19.7553 9.25641L16.684 6.18513L14.4902 8.43515Z"
      />
    </SvgIcon>
  );
}
