import React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Box } from '@mui/material';
import { render, screen, cleanup, act } from '../../../util/test-utils';
import PTopBar from './PTopBar';

class ChannelMock {
  public onmessage(): void {}

  public postMessage(): void {
    this.onmessage();
  }
}
global.BroadcastChannel = ChannelMock;

jest.mock('react-idle-timer', () => ({
  useIdleTimer: jest.fn(),
  createMocks: jest.requireActual('react-idle-timer').createMocks,
}));

const callbackFunction = jest.fn();
const idleTimeConfig = {
  idleTimeTimeout: 1000 * 60 * 2,
};
const userInfoMock = {
  userName: 'John Doe',
  userEmail: 'john.doe@cellebrite.com',
};
const defaultTopBarProps = {
  platformName: 'Platform Name',
  appName: 'App Name',
  isLoggedIn: true,
};

afterAll(cleanup);

describe('Platform top bar tests', () => {
  it('should render top bar', () => {
    const { container } = render(<PTopBar {...defaultTopBarProps} />);
    expect(container).toBeInTheDocument();
  });

  it('should render logo in top bar', () => {
    render(<PTopBar {...defaultTopBarProps} />);
    expect(screen.queryByTestId('topbar-cellebrite-light-logo')).toBeInTheDocument();
  });

  it('should render top bar without login section', () => {
    render(<PTopBar {...defaultTopBarProps} isLoggedIn={false} />);
    expect(screen.queryByTestId('topbar-auth-button')).not.toBeInTheDocument();
  });

  it('should render top bar with login section', () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} />);
    expect(screen.getByTestId('topbar-auth-button')).toBeInTheDocument();
  });

  it('should render top bar with login button', () => {
    render(<PTopBar {...defaultTopBarProps} isLoggedIn={false} handleLogin={callbackFunction} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should render children', () => {
    const testId = 'topbar-test-child';
    render(
      <PTopBar {...defaultTopBarProps} handleLogout={callbackFunction}>
        <Box data-testid={testId} />
        <Box data-testid={testId} />
      </PTopBar>
    );
    expect(screen.getAllByTestId(testId).length).toBe(2);
  });

  it('should start idle timer', () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} idleTimeConfig={idleTimeConfig} />);
    expect(useIdleTimer).toHaveBeenCalled();
  });

  it('should not start idle timer', () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} />);
    expect(useIdleTimer).not.toHaveBeenCalled();
  });

  it('should not render idle prompt', () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} />);
    expect(screen.queryByTestId('idle-prompt')).not.toBeInTheDocument();
  });
  it('should render avatar button with user name start letters', () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} userInfo={userInfoMock} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('should open menu on avatar click', async () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} userInfo={userInfoMock} />);
    await act(async () => {
      await screen.getByTestId('topbar-auth-button').click();
    });
    expect(screen.getByTestId('top-bar-menu')).toBeInTheDocument();
  });
  it('should not render admin portal button', async () => {
    render(<PTopBar {...defaultTopBarProps} handleLogout={callbackFunction} userInfo={userInfoMock} />);
    expect(screen.queryByTestId('topbar-admin-portal-button')).not.toBeInTheDocument();
  });
  it('should render admin portal button', async () => {
    render(
      <PTopBar
        {...defaultTopBarProps}
        handleLogout={callbackFunction}
        userInfo={userInfoMock}
        adminPortal={{ url: 'https://www.example.com/' }}
      />
    );
    expect(screen.getByTestId('topbar-admin-portal-button')).toBeInTheDocument();
  });
});
