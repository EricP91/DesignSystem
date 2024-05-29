import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import { MTheme } from '../../theme';
import palette from '../../theme/palette';
import { chartHitsFormatter } from '../../util/chartHitsFormatter';
import ChartLegend from './ChartLegend';
import ChartTooltip from './ChartTooltip';
import ChartTooltipContent from './ChartTooltipContent';
import { BarCoordinates, CHART_BLUR_OPACITY, CHART_LEGEND_HEIGHT, ChartItem, ChartTooltipData } from './types';
import VerticalChartBar from './VerticalChartBar';

export interface VerticalChartProp {
  items: ChartItem[];
  title?: string;
  color?: string;
  barSize?: number;
  tooltipHeight?: number;
  tooltipWidth?: number;
}

const barColor = palette.light.green[1000];
const getChartItemWidth = (itemCount: number): string => `calc(${100 / itemCount}% - 5%)`;

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    boxShadow: `0px 16px 32px -4px ${theme.palette.grey[2100_20]}`,
    border: `1px solid ${theme.palette.blue[300]}`,
    borderRadius: theme.spacing(1),
    position: 'relative',
    height: '100%',
  },
  title: {
    padding: theme.spacing(2, 0, 1, 3),
  },
  chartWrapper: {},
}));

function VerticalChart({
  items,
  title,
  color = barColor,
  barSize = 8,
  tooltipHeight,
  tooltipWidth,
}: VerticalChartProp): JSX.Element {
  const theme: MTheme = useTheme();
  const classes = useStyles();
  const [barCoordinates, setBarCoordinates] = useState<BarCoordinates>({});
  const [tooltipData, setTooltipData] = useState<ChartTooltipData>({} as ChartTooltipData);
  const chartItemWidth = getChartItemWidth(items.length);
  const parentRef = useRef<HTMLDivElement>(null);

  const getBarOpacity = useCallback(
    (index: number): number => (!tooltipData?.open || index === tooltipData?.index ? 1 : CHART_BLUR_OPACITY),
    [tooltipData]
  );

  const openTooltip = useCallback(
    (_e: unknown, index: number) => {
      const item = items[index];
      if (item?.tooltip) {
        setTooltipData({
          index,
          open: true,
          content: <ChartTooltipContent item={item} />,
          coordinates: barCoordinates[index],
        });
      }
    },
    [barCoordinates, items]
  );

  const closeTooltip = useCallback(() => {
    setTooltipData({} as ChartTooltipData);
  }, []);

  return (
    <Box className={classes.root} ref={parentRef} data-testid="vertical-chart-root">
      {title && (
        <Typography variant="subtitle1" className={classes.title} data-testid="vertical-chart-title">
          {title}
        </Typography>
      )}
      <ChartTooltip
        {...tooltipData}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        height={tooltipHeight}
        width={tooltipWidth}
        lastIndex={items.length - 1}
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={items}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: CHART_LEGEND_HEIGHT + 40,
          }}
          className={classes.chartWrapper}
        >
          <XAxis
            onMouseEnter={openTooltip as unknown as MouseEventHandler}
            onMouseLeave={closeTooltip}
            tickLine={false}
            tick={<ChartLegend items={items} hoveredIndex={tooltipData?.index} chartItemWidth={chartItemWidth} />}
            stroke={theme.palette.grey[500]}
          />
          <YAxis
            tickLine={false}
            tickFormatter={chartHitsFormatter}
            tick={{ fill: theme.palette.grey[1500] }}
            stroke={theme.palette.grey[500]}
          />

          <Bar
            dataKey="count"
            barSize={barSize}
            minPointSize={2}
            isAnimationActive={false}
            shape={
              <VerticalChartBar
                barCoordinates={barCoordinates}
                setBarCoordinates={setBarCoordinates}
                chartItemWidth={chartItemWidth}
                parentRef={parentRef}
              />
            }
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
          >
            {items.map((item, index) => (
              <Cell fill={color} key={item.id} opacity={getBarOpacity(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default VerticalChart;
