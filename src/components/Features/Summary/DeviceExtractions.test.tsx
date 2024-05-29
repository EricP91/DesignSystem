import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { Default } from './DeviceExtractions.stories';
import { DeviceExtractionsProps } from './DeviceExtractions';

describe('Device Extractions test', () => {
  it('should render content', () => {
    render(<Default {...(Default.args as DeviceExtractionsProps)} />);
    expect(screen.getAllByTestId('avatar').length).toEqual(3);
    expect(screen.getAllByText('Samsung SGH-i747M Galaxy S III').length).toEqual(3);
  });
  it('should render Skeleton', () => {
    render(<Default {...{ ...(Default.args as DeviceExtractionsProps), isLoading: true }} />);
    expect(screen.getAllByTestId('avatar').length).toEqual(2);
    expect(screen.getAllByTestId('extraction-skeleton-box').length).toEqual(2);
  });
});
