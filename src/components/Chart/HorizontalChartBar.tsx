import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import { BarCoordinates, ChartItem } from './types';
import OverflowTooltip from '../Tooltip/OverflowTooltip';

export const HORIZONTAL_BAR_CHART_HEIGHT = 56;
export const HORIZONTAL_BAR_CHART_WIDTH_OFFSET = 46;
export const HORIZONTAL_BAR_CHART_Y_OFFSET = 32;
export const HORIZONTAL_BAR_RIGHT_PADDING = 20;

export interface HorizontalChartBarProp {
  x?: number;
  y?: number;
  fill?: string;
  opacity?: number;
  width?: number;
  height?: number;
  index?: number;
  barCoordinates: BarCoordinates;
  setBarCoordinates: (barCoordinates: BarCoordinates) => void;
  openTooltip: (_e: unknown, index: number) => void;
  closeTooltip: (index: number) => void;
  items: ChartItem[];
  parentRef?: React.RefObject<HTMLElement>;
  value?: number;
}

const useStyles = makeStyles((theme: MTheme) => ({
  bar: {
    backgroundColor: ({ fill }: HorizontalChartBarProp) => fill,
    opacity: ({ opacity = 1 }: HorizontalChartBarProp) => opacity,
    height: 8,
    width: ({ width }: HorizontalChartBarProp) => `calc(${(width || 0) - HORIZONTAL_BAR_RIGHT_PADDING}px - 5%)`,
    borderRadius: theme.spacing(0.5),
    marginTop: theme.spacing(1),
  },
  container: {
    height: theme.spacing(5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    opacity: ({ opacity = 1 }: HorizontalChartBarProp) => opacity,
  },
  avatarContainer: {
    minWidth: theme.spacing(5.75),
    alignSelf: 'end',
  },
  textContainer: {
    width: ({ parentRef }) =>
      `calc(${
        (parentRef?.current?.getBoundingClientRect()?.width || 0) - HORIZONTAL_BAR_CHART_WIDTH_OFFSET * 2
      }px - 10%)`,
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(3),
  },
  primaryText: {
    display: 'block',
    fontWeight: 500,
    fontSize: theme.spacing(1.75),
    lineHeight: theme.spacing(3),
  },
  secondaryText: {
    display: 'block',
    fontWeight: 400,
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
export default function HorizontalChartBar(props: HorizontalChartBarProp): JSX.Element {
  const {
    parentRef,
    x = 0,
    y = 0,
    openTooltip,
    closeTooltip,
    index = 0,
    setBarCoordinates,
    barCoordinates,
    items,
    value,
  } = props;
  const { avatar, primaryText, secondaryText } = items[index];
  const barRef = useRef<HTMLDivElement>(null);

  const classes = useStyles(props);
  useEffect(() => {
    if (barCoordinates[index] === undefined || barCoordinates[index].barX !== x || barCoordinates[index].barY !== y) {
      const { x: childX = x, y: childY = y } = barRef?.current?.getBoundingClientRect() || {};
      const { x: parentX = x, y: parentY = y } = parentRef?.current?.getBoundingClientRect() || {};
      const actualX = childX - parentX;
      const actualY = childY - parentY;

      if (
        barCoordinates[index] === undefined ||
        barCoordinates[index].x !== actualX ||
        barCoordinates[index].y !== actualY
      ) {
        setBarCoordinates({ ...barCoordinates, [index]: { x: actualX, y: actualY, barX: x, barY: y } });
      }
    }
  }, [parentRef, setBarCoordinates, x, y, index, barCoordinates]);

  const onMouseEnter = (testIndex: number) => () => openTooltip(null, testIndex);
  const onMouseLeave = (testIndex: number) => () => closeTooltip(testIndex);

  if (value === 0) {
    return <></>;
  }

  return (
    <g>
      <foreignObject
        overflow="visible"
        x={x - HORIZONTAL_BAR_CHART_WIDTH_OFFSET}
        y={y - HORIZONTAL_BAR_CHART_Y_OFFSET}
        width={`calc(100% - ${HORIZONTAL_BAR_CHART_WIDTH_OFFSET}px - ${HORIZONTAL_BAR_RIGHT_PADDING}px)`}
        height={HORIZONTAL_BAR_CHART_HEIGHT}
        onMouseEnter={onMouseEnter(index) as MouseEventHandler}
        onMouseLeave={onMouseLeave(index)}
      >
        <div className={classes.container}>
          <div className={classes.avatarContainer}>{avatar || null}</div>
          <div>
            <div className={classes.textContainer}>
              <OverflowTooltip
                className={classes.primaryText}
                data-testid="horizontal-chart-legend-primary"
                placement="top"
                title={primaryText || ''}
                component="span"
              >
                <span data-testid="horizontal-chart-legend-primary">{primaryText}</span>
              </OverflowTooltip>
              <OverflowTooltip
                className={classes.secondaryText}
                placement="top"
                title={secondaryText || ''}
                component="span"
              >
                <span data-testid="horizontal-chart-legend-secondary">{secondaryText}</span>
              </OverflowTooltip>
            </div>
            <div className={classes.bar} ref={barRef} data-testid="horizontal-chart-bar" />
          </div>
        </div>
      </foreignObject>
    </g>
  );
}
