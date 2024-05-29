import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import { BarCoordinates, DEFAULT_CHART_ITEM_WIDTH, CHART_X_ADJUSTMENT } from './types';

export interface VerticalChartBarProp {
  x?: number;
  y?: number;
  fill?: string;
  opacity?: number;
  width?: number;
  height?: number;
  index?: number;
  chartItemWidth?: string;
  barCoordinates: BarCoordinates;
  setBarCoordinates: (barCoordinates: BarCoordinates) => void;
  parentRef?: React.RefObject<HTMLElement>;
  value?: number;
}

const useStyles = makeStyles((theme: MTheme) => ({
  bar: {
    backgroundColor: ({ fill }: VerticalChartBarProp) => fill,
    opacity: ({ opacity = 1 }: VerticalChartBarProp) => opacity,
    height: '100%',
    width: ({ width }: VerticalChartBarProp) => `${width}px`,
    borderRadius: theme.spacing(0.5, 0.5, 0, 0),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const VerticalChartBar = (props: VerticalChartBarProp): JSX.Element => {
  const {
    parentRef,
    setBarCoordinates,
    barCoordinates,
    width = 0,
    height = 0,
    index = 0,
    x = 0,
    y = 0,
    chartItemWidth = DEFAULT_CHART_ITEM_WIDTH,
    value,
  } = props;
  const classes = useStyles(props);
  const barRef = useRef<HTMLDivElement>(null);

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

  if (value === 0) {
    return <></>;
  }

  return (
    <foreignObject
      x={x - (CHART_X_ADJUSTMENT - width / 2)}
      y={y}
      width={chartItemWidth}
      height={height}
      data-testid="vertical-chart-bar"
    >
      <div className={classes.bar} ref={barRef} />
    </foreignObject>
  );
};

export default VerticalChartBar;
