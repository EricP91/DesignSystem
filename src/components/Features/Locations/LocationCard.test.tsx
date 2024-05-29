import { render, screen, fireEvent } from 'test-utils';
import React from 'react';
import { Default } from './LocationCard.stories';
import { LocationCardProps } from './LocationCard';

describe('LocationCard', () => {
  it('should display a card that contains the place name, timestamp and icon', () => {
    const { address, timestamp } = Default.args as LocationCardProps;
    render(<Default {...(Default.args as LocationCardProps)} />);

    expect(screen.getByTestId('location-card-name')).toHaveTextContent(address);
    expect(screen.getByTestId('location-card-timestamp')).toHaveTextContent(timestamp);
    expect(screen.getByTestId('pin-icon')).toBeInTheDocument();
  });

  it('Should trigger the onClick function passed from props when clicking the card', () => {
    const onClickSpy = jest.fn();

    render(<Default {...(Default.args as LocationCardProps)} onClick={onClickSpy} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
