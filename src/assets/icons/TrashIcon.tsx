import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export function TrashIcon(props?: SvgIconProps): JSX.Element {
  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1995 3.20063H15.1989C15.6407 3.20063 15.9988 3.55875 15.9988 4.00051C15.9988 4.44227 15.6407 4.80039 15.1989 4.80039H14.399V13.599C14.399 14.9243 13.3247 15.9987 11.9994 15.9987H4.00061C2.67533 15.9987 1.60098 14.9243 1.60098 13.599V4.80039H0.801099C0.359338 4.80039 0.0012207 4.44227 0.0012207 4.00051C0.0012207 3.55875 0.359338 3.20063 0.801099 3.20063H4.80049V1.86484C4.83956 0.798681 5.73392 -0.0348616 6.80018 0.00112257H9.19982C10.2661 -0.0348616 11.1604 0.798681 11.1995 1.86484V3.20063ZM5.60122 12.0011C6.04305 12.0011 6.40122 11.6429 6.40122 11.2011V8.00107C6.40122 7.55924 6.04305 7.20107 5.60122 7.20107C5.15939 7.20107 4.80122 7.55924 4.80122 8.00107V11.2011C4.80122 11.6429 5.15939 12.0011 5.60122 12.0011ZM6.40122 1.86507C6.40122 1.73707 6.56922 1.60107 6.80122 1.60107H9.20122C9.43322 1.60107 9.60122 1.73707 9.60122 1.86507V3.20107H6.40122V1.86507ZM10.3997 12.0001C10.8416 12.0001 11.1997 11.6419 11.1997 11.2001V8.00007C11.1997 7.55825 10.8416 7.20007 10.3997 7.20007C9.9579 7.20007 9.59973 7.55825 9.59973 8.00007V11.2001C9.59973 11.6419 9.9579 12.0001 10.3997 12.0001Z"
        fill="#D03639"
      />
    </SvgIcon>
  );
}
