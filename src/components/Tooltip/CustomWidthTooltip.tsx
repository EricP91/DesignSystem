import React from 'react';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const defaultTooltipWidth = 300;

export interface CustomTooltipProps {
  direction?: TooltipProps['placement'];
  width?: number;
}

export interface CustomWidthTooltipProps extends TooltipProps {
  title: string | React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any, any> & React.ReactNode;
  tooltipProps?: CustomTooltipProps;
}

function CustomWidthTooltip({ title, children, tooltipProps, ...props }: CustomWidthTooltipProps): JSX.Element {
  const CustomWidthTtip = styled(({ className, ...TtipProps }: TooltipProps) => (
    <Tooltip {...TtipProps} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: tooltipProps?.width ? tooltipProps.width : defaultTooltipWidth,
    },
  });

  return (
    <CustomWidthTtip
      title={title}
      arrow
      placement={tooltipProps?.direction ? tooltipProps.direction : 'top'}
      {...props}
    >
      {children}
    </CustomWidthTtip>
  );
}

export default CustomWidthTooltip;
