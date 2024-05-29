import { makeStyles } from '@mui/styles';
import React, { useCallback } from 'react';

import { MTheme } from '../../theme';
import { ChartTooltipData } from './types';

export interface ChartTooltipProp extends ChartTooltipData {
  onMouseEnter: (_e: unknown, index: number) => void;
  onMouseLeave: () => void;
  lastIndex: number;
  width?: number;
  height?: number;
  horizontal?: boolean;
}

const defaultHeight = 86;
const defaultWidth = 250;
const arrowLeft = 20;
const arrowBorderWidth = 6;
const outsideCoordinates = -99999;

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    position: 'absolute',
    transform: ({ horizontal }: ChartTooltipProp) => (horizontal ? 'translate(-45%, 100%) ' : ''),
    left: ({ coordinates, index, lastIndex, width = defaultWidth, horizontal = false }: ChartTooltipProp) => {
      if (horizontal) {
        return '50%';
      }
      if (coordinates) {
        return index !== lastIndex
          ? coordinates.x - arrowLeft - arrowBorderWidth / 2
          : coordinates.x - (width - arrowLeft - arrowBorderWidth * 2 + 3);
      }
      return outsideCoordinates;
    },
    top: ({ coordinates, height = defaultHeight, horizontal }: ChartTooltipProp) => {
      if (horizontal) {
        return coordinates ? coordinates.y - height + arrowBorderWidth * 2 : outsideCoordinates;
      }
      return coordinates ? coordinates.y - height - arrowBorderWidth * 2 : outsideCoordinates;
    },
    zIndex: 9999,
    height: ({ height = defaultHeight }) => `${height}px`,
    width: ({ width = defaultWidth }) => `${width}px`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    background: 'white',
    boxShadow: `0px 20px 40px -4px rgba(145, 158, 171, 0.24), 0px 0px 2px 0px rgba(145, 158, 171, 0.24)`,
    filter: ({ horizontal }) => (horizontal ? `drop-shadow(0px -20px 40px ${theme.palette.grey[2100_20]})` : ''),
    '&::after': {
      content: ({ horizontal }) => (horizontal ? undefined : '""'),
      position: 'absolute',
      width: '100%',
      height: '15px',
      bottom: '-15px',
      left: 0,
      background: 'transparent',
    },
  },
  arrow: {
    position: 'absolute',
    width: `${arrowBorderWidth}px`,
    height: `${arrowBorderWidth}px`,
    bottom: ({ horizontal }) => (horizontal ? 'auto' : `-${arrowBorderWidth * 2}px`),
    top: ({ horizontal }) => (horizontal ? `-${arrowBorderWidth * 2 - 1}px` : 'auto'),
    left: ({ index, lastIndex, horizontal }) => {
      if (horizontal || index !== lastIndex) {
        return `${arrowLeft}px`;
      }
      return 'auto';
    },
    right: ({ index, lastIndex, horizontal }) => {
      if (!horizontal && index === lastIndex) {
        return `${arrowLeft}px`;
      }
      return 'auto';
    },
    borderWidth: `${arrowBorderWidth}px`,
    borderStyle: 'solid',
    borderColor: ({ horizontal }) =>
      horizontal ? `transparent transparent white transparent` : `white transparent transparent transparent`,
    boxShadow: `0px 16px 32px -4px ${theme.palette.grey[2100_20]}`,
  },
}));

function ChartTooltip(props: ChartTooltipProp): JSX.Element | null {
  const { index, open, content, onMouseEnter, onMouseLeave } = props;
  const cachedOnMouseEnter = useCallback(() => onMouseEnter(null, index), [onMouseEnter, index]);
  const classes = useStyles(props);
  return open ? (
    <div
      className={classes.root}
      onMouseEnter={cachedOnMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="chart-tooltip"
    >
      {content}
      <span className={classes.arrow} />
    </div>
  ) : null;
}

export default ChartTooltip;
