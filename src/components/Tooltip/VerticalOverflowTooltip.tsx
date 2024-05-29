import React, { useRef, useEffect, useState } from 'react';
import { Box, Tooltip, TooltipProps } from '@mui/material';

export interface VerticalOverflowTooltipProps extends TooltipProps {
  maxLines: number;
}

const VerticalOverflowTooltip = ({ maxLines, children, ...props }: VerticalOverflowTooltipProps): JSX.Element => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const textElementRef = useRef<HTMLInputElement | null>(null);

  const compareSize = (): void => {
    const compare = textElementRef?.current
      ? textElementRef.current.offsetHeight < textElementRef.current.scrollHeight
      : false;
    setIsOverflow(compare);
  };

  useEffect(() => {
    compareSize();
    window.addEventListener('resize', compareSize);

    return () => window.removeEventListener('resize', compareSize);
  }, []);

  return (
    <Tooltip {...props} disableHoverListener={!isOverflowed}>
      <Box
        ref={textElementRef}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: maxLines,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

export default VerticalOverflowTooltip;
