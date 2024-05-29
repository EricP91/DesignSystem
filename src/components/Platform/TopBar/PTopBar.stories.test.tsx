import { render, screen } from 'test-utils';
import React from 'react';
import { TopBar } from './PTopBar.stories';

class ChannelMock {
  public onmessage(): void {}

  public postMessage(): void {
    this.onmessage();
  }
}
global.BroadcastChannel = ChannelMock;

it('should render top bar with logo', () => {
  render(<TopBar />);
  const logo = screen.getByTestId('topbar-cellebrite-light-logo');
  expect(logo).toBeInTheDocument();
});
