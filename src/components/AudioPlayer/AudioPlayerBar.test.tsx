import { render, screen, fireEvent } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import AudioPlayerBar from './AudioPlayerBar';

describe('AudioPlayerBar', () => {
  it('should show the elapsed number of seconds out of the total amount', () => {
    render(<AudioPlayerBar currentTime={0} duration={120} onTimeUpdate={() => {}} />);
    expect(screen.getByText('0:00 / 2:00')).toBeTruthy();
  });
  it('should call onTimeUpdate when mouse is down  on the progress-bar', () => {
    const onTimeUpdate = jest.fn();
    render(<AudioPlayerBar currentTime={0} duration={120} onTimeUpdate={onTimeUpdate} />);
    fireEvent.mouseDown(screen.getByTestId('progress-bar'));
    expect(onTimeUpdate).toBeCalled();
  });
});
