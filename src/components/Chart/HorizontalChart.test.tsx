import React from 'react';
import { act, fireEvent, render, screen } from 'test-utils';
import HorizontalChart, { HorizontalChartProp } from './HorizontalChart';
import { Default as HorizontalChartDefault } from './HorizontalChart.stories';

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ResponsiveContainer: ({ children }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

describe('HorizontalChart', () => {
  const { args } = HorizontalChartDefault;

  it('should display the expected title', () => {
    render(<HorizontalChart {...(args as HorizontalChartProp)} />);
    expect(screen.queryByText(args?.title || '')).toBeInTheDocument();
  });

  it('should display as many bars as chart items with value different from 0', () => {
    render(<HorizontalChart {...(args as HorizontalChartProp)} />);
    const bars = screen.queryAllByTestId('horizontal-chart-bar');
    expect(bars.length).toEqual(args?.items?.filter((item) => item.count > 0).length);
  });

  it('should display the legend text', () => {
    render(<HorizontalChart {...(args as HorizontalChartProp)} />);
    const expectedPrimary = args && args.items ? args?.items[0]?.primaryText : '';
    const expectedSecondary = args && args.items ? args?.items[0]?.secondaryText : '';

    const legendPrimary = screen.queryAllByTestId('horizontal-chart-legend-primary');
    expect(legendPrimary[0].textContent).toEqual(expectedPrimary);
    const legendSecondary = screen.queryAllByTestId('horizontal-chart-legend-secondary');
    expect(legendSecondary[0].textContent).toEqual(expectedSecondary);
  });

  it('should display the tooltip', async () => {
    render(<HorizontalChart {...(args as HorizontalChartProp)} />);
    await act(() => {
      fireEvent.mouseOver(screen.getAllByTestId('horizontal-chart-legend-primary')[0]);
    });
    expect(screen.getByTestId('chart-tooltip')).toBeInTheDocument();
  });
});
