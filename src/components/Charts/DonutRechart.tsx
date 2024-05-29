import { Card, Skeleton, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import React, { MouseEvent, useCallback, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { MTheme } from '../../theme';
import {
  Category,
  colors,
  defaultPieSize,
  getCellFillColor,
  pieSizeByLegendHeightMap,
  PieSizeParams,
  renderActiveShape,
  ToolTipOffset,
} from './DonutRechart.types';
import { CustomTooltip, LegendRecharts } from './Recharts';

export interface DonutRechartProps {
  chartData: {
    count: number | null;
    name: string;
    categories: Category[];
  };
  isLoading: boolean;
}
const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    height: theme.spacing(65.25),
    position: 'relative',

    '& .recharts-responsive-container': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '& .MuiSkeleton-root': {
      backgroundColor: theme.palette.grey[1100],
      borderRadius: 0,
    },

    '& .css-1a8w37c': {
      position: 'absolute',
      top: '38%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      '& .MuiSkeleton-root:first-of-type': {
        marginBottom: theme.spacing(0.5),
      },
    },
  },
  titleWrapper: {
    width: 'auto',
    height: theme.spacing(5),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.spacing(2.25),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  toolTipWrapper: {
    padding: theme.spacing(0.875, 1),
    backgroundColor: theme.palette.grey[0],
    display: 'flex',
    alignItems: 'center',
  },
  tooltipBullet: {
    display: 'inline-block',
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    background: 'purple',
    borderRadius: theme.spacing(12.5),
    transform: 'translateY(-1.5px)',
    marginRight: theme.spacing(1),
  },
  tooltipLabelText: {
    fontSize: theme.spacing(1.5),
    lineHeight: theme.spacing(2.25),
    color: theme.palette.text.primary,
    fontWeight: 400,
    '&:not(:last-child)': {
      marginRight: theme.spacing(0.75),
    },
  },
}));

export function DonutRechart({ chartData, isLoading }: DonutRechartProps): JSX.Element {
  const theme: MTheme = useTheme();
  const classes = useStyles();
  const { count, categories } = chartData;
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(selectedIndex);
  const [legendIndex, setLegendIndex] = useState<number>(-1);
  const [pieSize, setPieSize] = useState<PieSizeParams>(defaultPieSize);

  const onResize = useCallback(
    (width?: number | undefined, height?: number | undefined) => {
      if (height && pieSizeByLegendHeightMap[height]) {
        setPieSize(pieSizeByLegendHeightMap[height]);
      }
    },
    [setPieSize]
  );

  const categoriesWithCount = categories.filter((category) => category?.value > 0);

  function onPieEnter(e: React.MouseEvent<MouseEvent, Element>, index: number): void {
    if (!isLoading) {
      setActiveIndex(index);
    }
  }

  function onPieLeave(): void {
    if (!isLoading) {
      setActiveIndex(selectedIndex);
    }
  }

  function onPieClick(e: React.MouseEvent<MouseEvent, Element>, index: number): void {
    if (!isLoading) {
      setSelectedIndex((prev) => (prev === index ? -1 : index));
    }
  }

  function onLegendEnter(index: number): void {
    if (!isLoading) {
      setLegendIndex(index);
    }
  }

  function onLegendLeave(): void {
    if (!isLoading) {
      setLegendIndex(-1);
    }
  }

  function onLegendClick(index: number): void {
    if (!isLoading) {
      setActiveIndex((prev) => (prev === index ? -1 : index));
      setSelectedIndex((prev) => (prev === index ? -1 : index));
    }
  }

  const tempoArr: Category[] = [
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 40,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 50,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 90,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 344,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 110,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 15,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 35,
    },
    {
      name: <Skeleton variant="text" width="92px" height="11.7px" />,
      value: 221,
    },
  ];

  return (
    <Card className={classes.root}>
      <Typography variant="subtitle2" className={classes.titleWrapper}>
        {isLoading ? <Skeleton variant="text" width="160px" height="11.7px" /> : 'Installed Apps'}
      </Typography>
      <ResponsiveContainer height={455}>
        <PieChart>
          {isLoading ? null : (
            <Tooltip
              wrapperStyle={{ boxShadow: theme.shadows[24], borderRadius: theme.spacing(1.5) }}
              offset={ToolTipOffset}
              content={<CustomTooltip color={colors[activeIndex]} payload={categoriesWithCount} />}
            />
          )}

          {isLoading ? null : (
            <text
              x="50%"
              y={pieSize.counterTextCy}
              textAnchor="middle"
              style={{
                fill: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: theme.spacing(4),
              }}
            >
              {activeIndex !== -1 ? categoriesWithCount[activeIndex].value : count}
            </text>
          )}
          {isLoading ? null : (
            <text
              x="50%"
              y={pieSize.titleTextCy}
              textAnchor="middle"
              style={{
                fill: colors[activeIndex],
                fontSize: theme.spacing(2),
                fontWeight: theme.typography.fontWeightBold,
              }}
            >
              {activeIndex !== -1 ? categoriesWithCount[activeIndex].name : chartData?.name}
            </text>
          )}

          <Pie
            id="pie-id"
            data={isLoading ? tempoArr : categoriesWithCount}
            dataKey="value"
            paddingAngle={1.5}
            cy={pieSize?.cy}
            innerRadius={pieSize?.innerRadius}
            outerRadius={pieSize?.outerRadius}
            activeIndex={selectedIndex}
            activeShape={(props) => renderActiveShape({ ...props, selectedIndex })}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            onClick={onPieClick}
          >
            {(isLoading ? tempoArr : categoriesWithCount).map((entry, index) => {
              const fill = getCellFillColor({ index, activeIndex, selectedIndex, legendIndex, isLoading, theme });
              return <Cell key={`cell-${entry.name}`} fill={fill} stroke={theme.palette.background.paper} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {LegendRecharts({
        align: 'left',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        onClick: onLegendClick,
        onMouseEnter: onLegendEnter,
        onMouseLeave: onLegendLeave,
        wrapperStyle: { width: '100%', left: 0 },
        isLoading,
        activeIndex,
        onResize,
        payload: isLoading ? tempoArr : categoriesWithCount,
      })}
    </Card>
  );
}
export default DonutRechart;
