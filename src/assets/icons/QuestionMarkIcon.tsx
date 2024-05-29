import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

interface QuestionMarkIconProps extends SvgIconProps {
  fillQuestionMark?: string;
}

export function QuestionMarkIcon({
  fill = 'white',
  fillQuestionMark = '#637381',
  ...props
}: QuestionMarkIconProps): JSX.Element {
  return (
    <SvgIcon width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="24" height="24" rx="12" fill={fill} />
      <path
        d="M13.3803 17.4516C13.3803 16.7366 13.4706 16.1667 13.6512 15.7419C13.8317 15.3172 14.1874 14.8522 14.7182 14.3468C15.2544 13.836 15.5937 13.4731 15.736 13.2581C15.9549 12.9301 16.0643 12.5753 16.0643 12.1935C16.0643 11.6882 15.9357 11.3038 15.6785 11.0403C15.4268 10.7715 15.0547 10.6371 14.5622 10.6371C14.0917 10.6371 13.7114 10.7688 13.4213 11.0323C13.1368 11.2903 12.9945 11.6425 12.9945 12.0887H11C11.0109 11.1371 11.3393 10.3844 11.985 9.83065C12.6361 9.27688 13.4952 9 14.5622 9C15.6621 9 16.5185 9.27419 17.1313 9.82258C17.7497 10.371 18.0588 11.1371 18.0588 12.121C18.0588 12.9973 17.643 13.8602 16.8112 14.7097L15.8016 15.6855C15.4405 16.0887 15.2544 16.6774 15.2435 17.4516H13.3803ZM13.2408 19.9597C13.2408 19.6425 13.342 19.3871 13.5445 19.1935C13.7469 18.9946 14.0205 18.8952 14.3653 18.8952C14.7155 18.8952 14.9918 18.9973 15.1943 19.2016C15.3967 19.4005 15.4979 19.6532 15.4979 19.9597C15.4979 20.2554 15.3995 20.5027 15.2025 20.7016C15.0055 20.9005 14.7264 21 14.3653 21C14.0041 21 13.725 20.9005 13.528 20.7016C13.3365 20.5027 13.2408 20.2554 13.2408 19.9597Z"
        fill={fillQuestionMark}
      />
      ;
    </SvgIcon>
  );
}
