import { Box, List, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { MouseEventHandler, RefObject, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import Popper, { PopperProps } from '../Popper/Popper';

const DEBOUNCE_WAIT_TIME = 100;
const TOOLTIP_WIDTH = 40;

export interface ListWithOverflowTooltipProps<ListData> {
  data: ListData[];
  visibleItemRenderer: (item: ListData, index?: number) => JSX.Element;
  tooltipItemRenderer: (item: ListData, index?: number) => JSX.Element;
  popperAnchorClassName?: string;
  minVisibleItemsLength?: number;
  containerType?: 'box' | 'list';
  dataTestId?: string;
  parentRef?: React.RefObject<HTMLDivElement | HTMLUListElement>;
  popperProps?: Partial<Omit<PopperProps, 'isPopperOpen' | 'popperAnchor'>>;
  className?: string;
  expandOnResize?: boolean;
  computeListExpandWidthOffset?: (listLength: number) => number;
  watchParentWidthChange?: boolean;
}

export interface ContainerProps {
  containerType: 'box' | 'list';
  className: string;
  dataTestId: string;
  listRef: React.RefObject<HTMLDivElement | HTMLUListElement>;
  children?: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    maxWidth: '100%',
  },
  visibleContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
}));

const Container = ({ containerType, className, dataTestId, children, listRef }: ContainerProps): JSX.Element | null => {
  switch (containerType) {
    case 'box':
      return (
        <Box className={className} ref={listRef} data-testid={dataTestId}>
          {children}
        </Box>
      );
    case 'list':
      return (
        <List className={className} data-testid={dataTestId} ref={listRef as RefObject<HTMLUListElement>}>
          {children}
        </List>
      );
    default:
      return null;
  }
};

interface ElementsState<T> {
  visibleElements: ListWithOverflowTooltipProps<T>['data'];
  tooltipElements: ListWithOverflowTooltipProps<T>['data'];
  reset: boolean;
  clientWidth: number;
}

// Takes any list of items and renders it.
// If the list overflows the parent container's width then it will remove one element from the visible list and add it inside a popper
function ListWithOverflowTooltip<ListData>({
  data,
  visibleItemRenderer,
  tooltipItemRenderer,
  minVisibleItemsLength = 1,
  popperAnchorClassName,
  containerType = 'box',
  parentRef,
  dataTestId = 'list-with-overflow-tooltip',
  popperProps,
  className = '',
  expandOnResize = false,
  computeListExpandWidthOffset = () => 0,
  watchParentWidthChange,
}: ListWithOverflowTooltipProps<ListData>): JSX.Element {
  const listRef = useRef<HTMLDivElement | HTMLUListElement>(null);
  const getDefaultElementsState = (): ElementsState<ListData> => ({
    visibleElements: data,
    tooltipElements: [],
    reset: false,
    clientWidth: (parentRef || listRef)?.current?.clientWidth || 0,
  });
  const [{ visibleElements, tooltipElements, reset, clientWidth }, setElements] = useState<ElementsState<ListData>>(
    getDefaultElementsState()
  );
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLElement | null>(null);
  const [openedPopover, setOpenedPopover] = useState(false);
  const visibleItemsRef = useRef<HTMLDivElement | HTMLUListElement>(null);
  const classes = useStyles();

  const resetListToDefault = (resetItems = true): void => {
    setElements({ ...getDefaultElementsState(), reset: resetItems });
  };

  const calcVisibleItems = (): void => {
    const { current } = parentRef || listRef;

    if (current) {
      let widthSum = 0;
      const items = [...(visibleItemsRef?.current?.children as unknown as HTMLElement[])];
      let maxClientWidth =
        current.clientWidth - (tooltipElements.length !== 0 ? computeListExpandWidthOffset(tooltipElements.length) : 0);

      if (items.length !== 1) {
        maxClientWidth -= TOOLTIP_WIDTH;
      }

      const rearranged = items.some((item, i) => {
        widthSum += item.clientWidth;
        if (current.scrollWidth !== current.clientWidth && widthSum > maxClientWidth) {
          const endIndex = i > minVisibleItemsLength ? i : minVisibleItemsLength;

          setElements({
            visibleElements: data.slice(0, endIndex),
            tooltipElements: data.slice(endIndex),
            reset: false,
            clientWidth: current.clientWidth,
          });

          if (endIndex === 1) {
            items[0].style.maxWidth = `${maxClientWidth}px`;
          } else {
            items[0].style.removeProperty('max-width');
          }

          return true;
        }
        return false;
      });

      if (!rearranged) {
        resetListToDefault(false);
      }
    }
  };

  const resizeHandler: () => void = debounce(() => {
    resetListToDefault();
  }, DEBOUNCE_WAIT_TIME);

  useEffect(() => {
    resetListToDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (watchParentWidthChange && getDefaultElementsState().clientWidth !== clientWidth) {
      resetListToDefault();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchParentWidthChange, getDefaultElementsState().clientWidth]);

  useEffect(() => {
    if (reset) {
      calcVisibleItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  useEffect(() => {
    if (expandOnResize) {
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const popoverEnter: MouseEventHandler<HTMLDivElement> = (event) => {
    setPopoverAnchor(event.currentTarget);
    setOpenedPopover(true);
  };

  const popoverLeave = (): void => {
    setOpenedPopover(false);
  };

  return (
    <>
      <Container
        className={clsx(className, classes.root)}
        listRef={listRef}
        dataTestId={dataTestId}
        containerType={containerType}
      >
        <span className={classes.visibleContainer} ref={visibleItemsRef}>
          {visibleElements.map(visibleItemRenderer)}
        </span>
        {tooltipElements.length ? (
          <Box
            aria-describedby="popper"
            data-testid="tooltip-elements-count-indicator"
            className={popperAnchorClassName}
            onMouseEnter={popoverEnter}
            onMouseLeave={popoverLeave}
          >
            <Typography component="span" display="inline">
              +{tooltipElements.length}
            </Typography>
          </Box>
        ) : null}
        <Popper placement="bottom" arrow {...popperProps} isPopperOpen={openedPopover} popperAnchor={popoverAnchor}>
          {tooltipElements.map(tooltipItemRenderer)}
        </Popper>
      </Container>
    </>
  );
}

export default ListWithOverflowTooltip;
