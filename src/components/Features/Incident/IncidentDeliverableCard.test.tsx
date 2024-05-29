import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import {
  Device as IncidentDeliverableDeviceCard,
  File as IncidentDeliverableFileCard,
} from './IncidentDeliverableCard.stories';
import { IncidentDeliverableCardProps } from './IncidentDeliverableCard';

describe('IncidentDeliverableCard', () => {
  it('should render card with device icon', () => {
    render(<IncidentDeliverableDeviceCard {...(IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps)} />);
    expect(screen.getByTestId('icon-device')).toBeInTheDocument();
  });

  it('should render card with file icon', () => {
    render(<IncidentDeliverableFileCard {...(IncidentDeliverableFileCard.args as IncidentDeliverableCardProps)} />);
    expect(screen.getByTestId('icon-file')).toBeInTheDocument();
  });

  it('should render card with item text and icons', () => {
    render(<IncidentDeliverableDeviceCard {...(IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps)} />);
    const { items = [], iconsSet = [] } = IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps;
    items.forEach((item) => {
      expect(screen.getByText(item.key)).toBeTruthy();
      expect(screen.getByText(item.value)).toBeTruthy();
    });
    expect(screen.getAllByTestId('incident-deliverable-card-button-icon').length).toEqual(iconsSet.length);
  });

  it('should handle on click when clicking on icons', () => {
    render(<IncidentDeliverableDeviceCard {...(IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps)} />);
    screen.getAllByTestId('incident-deliverable-card-button-icon').forEach((btn) => fireEvent.click(btn));
  });

  it('should render card skeleton', () => {
    render(
      <IncidentDeliverableDeviceCard
        {...(IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps)}
        isLoading
      />
    );
    const { iconsSet = [] } = IncidentDeliverableDeviceCard.args as IncidentDeliverableCardProps;
    expect(screen.getByTestId('incident-deliverable-card-icon-skeleton')).toBeInTheDocument();
    expect(screen.getAllByTestId('incident-deliverable-card-text-skeleton').length).toEqual(iconsSet.length);
  });
});
