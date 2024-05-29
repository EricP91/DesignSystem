import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export function EditedIcon({ fill = '#121E28', ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity="0.01" width="24" height="24" fill={fill} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1087 5.47815L18.5248 7.8943C19.2003 8.53782 19.2279 9.60647 18.5866 10.284L10.6503 18.2203C10.3629 18.5053 9.98613 18.6828 9.58333 18.7229L5.90619 19.058H5.82683C5.59244 19.0593 5.36716 18.9673 5.20075 18.8022C5.01472 18.6169 4.92097 18.3583 4.94503 18.0968L5.3242 14.4197C5.36433 14.0169 5.5418 13.6401 5.82683 13.3527L13.7631 5.41643C14.4472 4.83845 15.4559 4.86499 16.1087 5.47815ZM13.1635 8.4762L15.5267 10.8394L17.2903 9.11992L14.883 6.71259L13.1635 8.4762Z"
        fill={fill}
      />
    </SvgIcon>
  );
}
