import React from 'react';
import { render, screen } from 'test-utils';
import { Default } from './LocationPopupContent.stories';
import { LocationPopupContentProps } from './LocationPopupContent';

describe('LocationPopupContent', () => {
  it('should display the location details', () => {
    const { locationData, geoAddress, formattedDate, locationSubgroup } = Default.args as LocationPopupContentProps;
    render(<Default {...(Default.args as LocationPopupContentProps)} />);
    expect(screen.getByTestId('location-popup')).toBeInTheDocument();
    expect(screen.getByTestId('location-popup-details')).toBeInTheDocument();
    expect(screen.getByText(geoAddress)).toBeInTheDocument();
    expect(screen.getByText(formattedDate as string)).toBeInTheDocument();
    expect(screen.getByText(locationData.locationGroup as string)).toBeInTheDocument();
    expect(screen.getByText(locationSubgroup as string)).toBeInTheDocument();
  });
});
