import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { Default } from './ExtractionSummary.stories';
import { ExtractionSummaryProps } from './ExtractionSummary';

describe('Extraction Summary test', () => {
  it('should render content', () => {
    render(<Default {...(Default.args as ExtractionSummaryProps)} />);
    expect(screen.getByText('Extraction summary')).toBeTruthy();
    expect(screen.getAllByTestId('summary-icon').length).toEqual(4);
  });
  it('should render Skeleton', () => {
    render(<Default {...{ ...(Default.args as ExtractionSummaryProps), isLoading: true }} />);
    expect(screen.getAllByTestId('summary-circular-spinner').length).toEqual(4);
  });
});
