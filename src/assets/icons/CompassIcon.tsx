import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function CompassIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9931 20C10.9078 20 9.8734 19.7919 8.89006 19.3758C7.9067 18.9597 7.05405 18.3909 6.33211 17.6694C5.61015 16.948 5.04098 16.0959 4.62459 15.1131C4.2082 14.1304 4 13.0966 4 12.0116C4 10.9107 4.2098 9.8759 4.62941 8.90726C5.04903 7.93861 5.61953 7.09438 6.34092 6.37455C7.06229 5.65472 7.9131 5.079 8.89334 4.6474C9.87359 4.2158 10.906 4 11.9905 4C13.0923 4 14.1271 4.21569 15.095 4.64708C16.063 5.07847 16.9067 5.65398 17.6264 6.37362C18.346 7.09326 18.9215 7.9372 19.3529 8.90545C19.7843 9.87371 20 10.9089 20 12.0111C20 13.1006 19.7842 14.1339 19.3526 15.1112C18.921 16.0884 18.3453 16.9377 17.6255 17.6591C16.9056 18.3805 16.0623 18.951 15.0954 19.3706C14.1285 19.7902 13.0944 20 11.9931 20ZM19 12.5H18.5H17.9583V11.5H18.5H19V12.5ZM16.875 12.5H15.7917V11.5L16.875 11.5V12.5ZM13.937 11.5C13.715 10.6374 12.9319 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C12.9319 14 13.715 13.3626 13.937 12.5H14.7083L14.7083 11.5L13.937 11.5Z"
        fill="#5E6974"
      />
    </SvgIcon>
  );
}