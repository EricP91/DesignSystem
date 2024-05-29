import React, { useState, useCallback, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';
import { chartHitsFormatter } from '../../util/chartHitsFormatter';
import ChartTooltipContent from './ChartTooltipContent';
import ChartTooltip from './ChartTooltip';
import { BarCoordinates, CHART_BLUR_OPACITY, ChartItem, ChartTooltipData } from './types';
import palette from '../../theme/palette';
import HorizontalChartBar from './HorizontalChartBar';

export interface HorizontalChartProp {
  items: ChartItem[];
  title?: string;
  color?: string;
  barSize?: number;
  tooltipHeight?: number;
  tooltipWidth?: number;
}

const barColor = palette.light.orange[900];

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
}));

function HorizontalChart({
  items,
  title,
  color = barColor,
  barSize = 8,
  tooltipHeight,
  tooltipWidth,
}: HorizontalChartProp): JSX.Element {
  const theme: MTheme = useTheme();
  const classes = useStyles();
  const [tooltipData, setTooltipData] = useState<ChartTooltipData>({} as ChartTooltipData);
  const [barCoordinates, setBarCoordinates] = useState<BarCoordinates>({});
  const parentRef = useRef<HTMLDivElement>(null);

  const getBarOpacity = useCallback(
    (index: number): number => (!tooltipData?.open || index === tooltipData?.index ? 1 : CHART_BLUR_OPACITY),
    [tooltipData]
  );

  const openTooltip = useCallback(
    (_e: unknown, index: number) => {
      const item = items[index];
      if (item.tooltip) {
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
    <Box className={classes.root} ref={parentRef}>
      {title && (
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
      )}
      <ChartTooltip
        {...tooltipData}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        height={tooltipHeight}
        width={tooltipWidth}
        horizontal
        lastIndex={items.length - 1}
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={items}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 60,
          }}
          barCategoryGap={16}
        >
          <XAxis
            type="number"
            tickLine={false}
            tick={{ fill: theme.palette.grey[1500] }}
            stroke={theme.palette.grey[500]}
            tickFormatter={chartHitsFormatter}
          />
          <YAxis type="category" yAxisId={0} axisLine={false} tickLine={false} tick={false} />
          <Bar
            dataKey="count"
            barSize={barSize}
            minPointSize={2}
            shape={
              <HorizontalChartBar
                items={items}
                parentRef={parentRef}
                barCoordinates={barCoordinates}
                setBarCoordinates={setBarCoordinates}
                openTooltip={openTooltip}
                closeTooltip={closeTooltip}
              />
            }
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

export default HorizontalChart;
