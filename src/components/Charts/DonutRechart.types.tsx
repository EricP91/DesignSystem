import { Sector } from 'recharts';
import React from 'react';
import { MTheme } from '../../theme';

export interface GetCellFillColorArgs {
  index: number;
  activeIndex: number;
  selectedIndex: number;
  legendIndex: number;
  isLoading: boolean;
  theme: MTheme;
}

export const ToolTipOffset = -3;
export const colors = [
  '#DBC17F',
  '#D03639',
  '#FFAE09',
  '#44AF69',
  '#7FDBDB',
  '#9B7EEF',
  '#E97BA9',
  '#2A85E2',
  '#56626C',
];

export function getCellFillColor(args: GetCellFillColorArgs): string {
  const { index, activeIndex, legendIndex, isLoading, selectedIndex, theme } = args;
  if ((activeIndex === index && selectedIndex !== index) || (legendIndex !== index && legendIndex !== -1))
    return `${colors[index]}4D`;

  if (isLoading) return theme.palette.grey[1100];

  return colors[index];
}

export interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  selectedIndex: number;
}

export const renderActiveShape = (props: RenderActiveShapeProps): JSX.Element => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, selectedIndex } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={selectedIndex === -1 ? outerRadius : outerRadius + 4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export interface Category {
  name: string | JSX.Element;
  value: number;
}

export const defaultPieSize = {
  cy: '30%',
  innerRadius: 108,
  outerRadius: 121,
  titleTextCy: '27%',
  counterTextCy: '37%',
};

export const pieSizeByLegendHeightMap: Record<number, PieSizeParams> = {
  143: defaultPieSize,
  179: {
    cy: '26%',
    innerRadius: 90,
    outerRadius: 103,
    titleTextCy: '24%',
    counterTextCy: '34%',
  },
  215: {
    cy: '23%',
    innerRadius: 75,
    outerRadius: 88,
    titleTextCy: '20%',
    counterTextCy: '30%',
  },
  251: {
    cy: '20%',
    innerRadius: 60,
    outerRadius: 73,
    titleTextCy: '16%',
    counterTextCy: '26%',
  },
  287: {
    cy: '17%',
    innerRadius: 45,
    outerRadius: 58,
    titleTextCy: '14%',
    counterTextCy: '22%',
  },
};

export interface PieSizeParams {
  cy: string;
  innerRadius: number;
  outerRadius: number;
  titleTextCy: string;
  counterTextCy: string;
}
