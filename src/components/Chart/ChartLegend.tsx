import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import clsx from 'clsx';
import React from 'react';

import { MTheme } from '../../theme';
import OverflowTooltip from '../Tooltip/OverflowTooltip';
import {
  CHART_BLUR_OPACITY,
  CHART_LEGEND_HEIGHT,
  CHART_X_ADJUSTMENT,
  ChartItem,
  DEFAULT_CHART_ITEM_WIDTH,
} from './types';

export interface ChartLegendProp {
  items: ChartItem[];
  hoveredIndex: number;
  chartItemWidth?: string;
  x?: number;
  y?: number;
  payload?: {
    index: number;
  };
}

const useStyles = makeStyles(() => ({
  faded: {
    opacity: CHART_BLUR_OPACITY,
  },
  container: {
    textAlign: 'center',
    paddingTop: '10px',
  },
  avatar: {},
  primaryContainer: {},
  secondaryContainer: {},
  overflow: {
    display: 'block',
  },
}));

function ChartLegend(props: ChartLegendProp): JSX.Element {
  const theme: MTheme = useTheme();
  const classes = useStyles();
  const {
    items,
    hoveredIndex,
    chartItemWidth = DEFAULT_CHART_ITEM_WIDTH,
    payload: { index = 0 } = {},
    x = 0,
    y = 0,
  } = props;
  const shouldBeFaded = hoveredIndex !== undefined && hoveredIndex !== index;
  const { avatar, primaryText, secondaryText } = items[index];

  return (
    <g>
      <foreignObject
        x={x - CHART_X_ADJUSTMENT}
        y={y - 10}
        height={CHART_LEGEND_HEIGHT}
        width={chartItemWidth}
        className={clsx(shouldBeFaded && classes.faded, classes.container)}
      >
        {avatar && <Box className={classes.avatar}>{avatar}</Box>}
        {primaryText && (
          <Box className={classes.primaryContainer} data-testid="vertical-chart-legend-primary">
            <Typography sx={{ ...theme.typography.body3 }}>
              <OverflowTooltip
                placement="top"
                title={primaryText}
                component="span"
                className={classes.overflow}
                dataTestId="vertical-chart-legend-primary-text"
              >
                <>{primaryText}</>
              </OverflowTooltip>
            </Typography>
          </Box>
        )}
        {secondaryText && (
          <Box className={classes.secondaryContainer} data-testid="vertical-chart-legend-secondary">
            <Typography sx={{ ...theme.typography.smallMedium, color: theme.palette.grey[1500] }}>
              <OverflowTooltip
                placement="top"
                title={secondaryText}
                component="span"
                className={classes.overflow}
                dataTestId="vertical-chart-legend-secondary-text"
              >
                <>{secondaryText}</>
              </OverflowTooltip>
            </Typography>
          </Box>
        )}
      </foreignObject>
    </g>
  );
}

export default ChartLegend;
