import React from 'react';
import { render, screen } from '../../../util/test-utils';
import PromptDialog from './PromptDialog';

const PromptDialogProps = {
  handleKeepAlive: jest.fn(),
  handleSignOut: jest.fn(),
  dialogTitle: 'Session Timeout',
  dialogContent: 'Your session is about to expire.',
};

describe('Prompt dialog tests', () => {
  it('should render prompt dialog', () => {
    const { container } = render(<PromptDialog {...PromptDialogProps} />);
    expect(container).toBeInTheDocument();
  });

  it('should render prompt dialog with default title', () => {
    render(<PromptDialog {...PromptDialogProps} />);
    expect(screen.getByText('Session Timeout')).toBeInTheDocument();
  });
  it('should render prompt dialog with custom title', () => {
    render(<PromptDialog {...PromptDialogProps} dialogTitle="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should render prompt dialog with default content', () => {
    render(<PromptDialog {...PromptDialogProps} />);
    expect(screen.getByText('Your session is about to expire.')).toBeInTheDocument();
  });
  it('should render prompt dialog with custom content', () => {
    render(<PromptDialog {...PromptDialogProps} dialogContent="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should render prompt dialog with default keep alive button', () => {
    render(<PromptDialog {...PromptDialogProps} />);
    expect(screen.getByText('i’m here')).toBeInTheDocument();
  });
  it('should render prompt dialog with custom keep alive button', () => {
    render(<PromptDialog {...PromptDialogProps} keepAliveText="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  it('should call "i’m here" when keep alive button is clicked', () => {
    render(<PromptDialog {...PromptDialogProps} />);
    screen.getByText('i’m here').click();
    expect(PromptDialogProps.handleKeepAlive).toHaveBeenCalled();
  });
  it('should start timer when dialog is opened', () => {
    jest.useFakeTimers();
    render(<PromptDialog {...PromptDialogProps} />);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 225);
  });
});
