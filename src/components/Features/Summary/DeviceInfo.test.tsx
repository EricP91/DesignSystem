import React from 'react';

import { render, screen } from 'test-utils';

import '@testing-library/jest-dom/extend-expect';
import { Default } from './DeviceInfo.stories';
import { DeviceInfoProps } from './DeviceInfo';

describe('Device info test', () => {
  it('should render content', () => {
    render(<Default {...(Default.args as DeviceInfoProps)} />);
    expect(screen.getAllByTestId('device-table-header').length).toEqual(4);
    expect(screen.getByText('General info')).toBeTruthy();
  });
  it('should render Skeleton', () => {
    render(<Default {...{ ...(Default.args as DeviceInfoProps), isLoading: true }} />);

    expect(screen.getAllByTestId('device-header-skeleton').length).toEqual(2);
  });
});
