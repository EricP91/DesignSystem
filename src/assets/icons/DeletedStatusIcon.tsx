import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function DeletedStatusIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon {...props}>
      <rect opacity="0.01" width="24" height="24" fill="#121E28" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1995 7.20063H19.1989C19.6407 7.20063 19.9988 7.55875 19.9988 8.00051C19.9988 8.44227 19.6407 8.80039 19.1989 8.80039H18.399V17.599C18.399 18.9243 17.3247 19.9987 15.9994 19.9987H8.00061C6.67533 19.9987 5.60098 18.9243 5.60098 17.599V8.80039H4.8011C4.35934 8.80039 4.00122 8.44227 4.00122 8.00051C4.00122 7.55875 4.35934 7.20063 4.8011 7.20063H8.80049V5.86484C8.83956 4.79868 9.73392 3.96514 10.8002 4.00112H13.1998C14.2661 3.96514 15.1604 4.79868 15.1995 5.86484V7.20063ZM9.60122 16.0011C10.043 16.0011 10.4012 15.6429 10.4012 15.2011V12.0011C10.4012 11.5592 10.043 11.2011 9.60122 11.2011C9.15939 11.2011 8.80122 11.5592 8.80122 12.0011V15.2011C8.80122 15.6429 9.15939 16.0011 9.60122 16.0011ZM10.4012 5.86507C10.4012 5.73707 10.5692 5.60107 10.8012 5.60107H13.2012C13.4332 5.60107 13.6012 5.73707 13.6012 5.86507V7.20107H10.4012V5.86507ZM14.3997 16.0001C14.8416 16.0001 15.1997 15.6419 15.1997 15.2001V12.0001C15.1997 11.5582 14.8416 11.2001 14.3997 11.2001C13.9579 11.2001 13.5997 11.5582 13.5997 12.0001V15.2001C13.5997 15.6419 13.9579 16.0001 14.3997 16.0001Z"
        fill="#121E28"
      />
    </SvgIcon>
  );
}