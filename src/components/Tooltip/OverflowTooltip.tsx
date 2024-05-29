import { Box, Fade } from '@mui/material';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import React, { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line import/no-cycle
import { TooltipTriggerBreakpointProp } from '../Filters/FilterButton';

export interface OverflowTooltipProps extends TooltipProps {
  className?: string;
  tooltipTriggerBreakpoint?: TooltipTriggerBreakpointProp;
  isMiddleEllipsis?: boolean;
  isLeftEllipsis?: boolean;
  component?: React.ElementType;
  dataTestId?: string;
}

const MAX_CONTENT = 'max-content';

const OverflowTooltip = ({
  tooltipTriggerBreakpoint,
  disableHoverListener = false,
  TransitionComponent = Fade,
  TransitionProps = { timeout: 600 },
  isMiddleEllipsis = false,
  isLeftEllipsis = false,
  component,
  dataTestId = 'content-container',
  ...props
}: OverflowTooltipProps): JSX.Element => {
  const [isOverflow, setIsOverflow] = useState(false);
  const textElementRef = useRef<HTMLInputElement | null>(null);

  /* istanbul ignore next */
  const setTextWithEllipsis = (parentNode: HTMLElement, childNode: HTMLElement, txtNode: HTMLElement): void => {
    childNode.style.width = MAX_CONTENT;
    const childWidth = childNode.offsetWidth;
    const containerWidth = parentNode.offsetWidth;
    const txtWidth = txtNode.offsetWidth;
    const targetWidth = childWidth > txtWidth ? childWidth : txtWidth;
    if (targetWidth > containerWidth) {
      setIsOverflow(true);
      const str: string = txtNode.textContent || '';
      const txtChars = str.length;
      const avgLetterSize = txtWidth / txtChars;
      const canFit = (containerWidth - (targetWidth - txtWidth)) / avgLetterSize;
      const delEachSide = (txtChars - canFit + 2) / 2;
      const endLeft = Math.floor(txtChars / 2 - delEachSide);
      const startRight = Math.ceil(txtChars / 2 + delEachSide);

      txtNode.setAttribute('data-original', txtNode.textContent || '');
      txtNode.textContent = `${str.slice(0, endLeft)}...${str.slice(startRight)}`;
    } else {
      txtNode.textContent = txtNode.getAttribute('data-original');
      setIsOverflow(false);
    }
  };

  // istanbul ignore next
  const prepEllipse = (node: HTMLElement): void => {
    const parent = node.parentNode as HTMLElement;
    const child = node.childNodes[0] as HTMLElement;
    const txtToEllipse = child;
    if (child !== null && txtToEllipse !== null) {
      if (txtToEllipse.hasAttribute('data-original')) {
        txtToEllipse.textContent = txtToEllipse.getAttribute('data-original');
      }
      setTextWithEllipsis(node.offsetWidth > parent.offsetWidth ? parent : node, child, txtToEllipse);
    }
  };

  const setIsOverflowValue = (): void => {
    // istanbul ignore if
    if (!textElementRef?.current) {
      setIsOverflow(false);
      return;
    }
    const isScrollWidthLargerThanClientWidth = textElementRef.current.scrollWidth > textElementRef.current.clientWidth;
    const isScrollWidthLargerThanTheProvidedBreakpoint = tooltipTriggerBreakpoint
      ? textElementRef.current.scrollWidth > tooltipTriggerBreakpoint
      : false;
    setIsOverflow(isScrollWidthLargerThanClientWidth || isScrollWidthLargerThanTheProvidedBreakpoint);
    if (isMiddleEllipsis) {
      prepEllipse(textElementRef.current);
    }
  };

  const getPropsChildrenText = (): string | null => {
    if (typeof props.children === 'string') {
      return props.children;
    }
    if (typeof props.children === 'object' && typeof props.children.props.children === 'string') {
      return props.children.props.children;
    }
    return null;
  };

  useEffect(() => {
    // istanbul ignore if
    if (isMiddleEllipsis) {
      const childrenText = getPropsChildrenText();
      if (textElementRef?.current && textElementRef.current.childNodes[0]) {
        const child = textElementRef.current.childNodes[0] as HTMLElement;
        if (!child.hasAttribute('data-original') || childrenText !== child.getAttribute('data-original')) {
          child.setAttribute('data-original', child.textContent || '');
        }
      }
    }

    if (!disableHoverListener) {
      setIsOverflowValue();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children]);

  useEffect(() => {
    if (!disableHoverListener) {
      window.addEventListener('resize', setIsOverflowValue);
      return () => {
        window.removeEventListener('resize', setIsOverflowValue);
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* istanbul ignore next */
  return (
    <Tooltip
      {...props}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      disableHoverListener={!isOverflow}
    >
      <Box
        component={component}
        ref={textElementRef}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: !isMiddleEllipsis ? 'ellipsis' : 'unset',
          direction: isLeftEllipsis ? 'rtl' : 'unset',
          textAlign: isLeftEllipsis ? 'left' : 'unset',
        }}
        data-testid={dataTestId}
      >
        {props.children}
      </Box>
    </Tooltip>
  );
};

export default OverflowTooltip;
