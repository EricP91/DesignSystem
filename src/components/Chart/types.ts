export const DEFAULT_CHART_ITEM_WIDTH = 'calc(20% - 5%)';
export const CHART_X_ADJUSTMENT = 50;
export const CHART_BLUR_OPACITY = 0.4;
export const CHART_LEGEND_HEIGHT = 100;

export interface ChartCoordinates {
  x: number;
  y: number;
  barX: number;
  barY: number;
}

export type BarCoordinates = Record<number, ChartCoordinates>;

export interface ChartTooltipData {
  index: number;
  open: boolean;
  content: JSX.Element;
  coordinates: ChartCoordinates;
}

export interface ChartItem {
  id: string;
  count: number;
  avatar?: JSX.Element;
  primaryText?: string;
  secondaryText?: string;
  tooltip?: JSX.Element;
}
