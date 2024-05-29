import React from 'react';
import { act, fireEvent, render, screen } from 'test-utils';
import VerticalChart, { VerticalChartProp } from './VerticalChart';
import { Default as VerticalChartDefault } from './VerticalChart.stories';

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

describe('VerticalChart', () => {
  const { args } = VerticalChartDefault;

  it('should display the expected title', () => {
    render(<VerticalChart {...(args as VerticalChartProp)} />);
    expect(screen.queryByText(args?.title || '')).toBeInTheDocument();
  });

  it('should display as many bars as chart items with value different to 0', () => {
    render(<VerticalChart {...(args as VerticalChartProp)} />);
    const bars = screen.queryAllByTestId('vertical-chart-bar');
    expect(bars.length).toEqual(args?.items?.filter((item) => item.count > 0).length);
  });

  it('should display the legend text', () => {
    render(<VerticalChart {...(args as VerticalChartProp)} />);
    const expectedPrimary = args && args.items ? args?.items[0]?.primaryText : '';
    const expectedSecondary = args && args.items ? args?.items[0]?.secondaryText : '';

    const legendPrimary = screen.queryAllByTestId('vertical-chart-legend-primary');
    expect(legendPrimary[0].textContent).toEqual(expectedPrimary);
    const legendSecondary = screen.queryAllByTestId('vertical-chart-legend-secondary');
    expect(legendSecondary[0].textContent).toEqual(expectedSecondary);
  });

  it('should display the tooltip', async () => {
    render(<VerticalChart {...(args as VerticalChartProp)} />);
    await act(() => {
      fireEvent.mouseOver(screen.getAllByTestId('vertical-chart-legend-primary')[0]);
    });
    expect(screen.getByTestId('chart-tooltip')).toBeInTheDocument();
  });
});
