import React from 'react';
import { render, screen } from 'test-utils';
import MAlert from './MAlert';

describe('MAlert', () => {
  it('should render MAlert', () => {
    const { container } = render(<MAlert />);
    expect(container).toBeInTheDocument();
  });

  it('should render MAlert with success severity', () => {
    render(<MAlert severity="success" />);
    const alertElement = screen.getByTestId('alert-element');
    expect(alertElement).toBeInTheDocument();
    const className = alertElement.getAttribute('class');
    expect(className?.includes('success')).toBeTruthy();
  });

  it('should render MAlert with info severity', () => {
    render(<MAlert severity="info" />);
    const alertElement = screen.getByTestId('alert-element');
    expect(alertElement).toBeInTheDocument();
    const className = alertElement.getAttribute('class');
    expect(className?.includes('info')).toBeTruthy();
  });

  it('should render MAlert with warning severity', () => {
    render(<MAlert severity="warning" />);
    const alertElement = screen.getByTestId('alert-element');
    expect(alertElement).toBeInTheDocument();
    const className = alertElement.getAttribute('class');
    expect(className?.includes('warning')).toBeTruthy();
  });

  it('should render MAlert with error severity', () => {
    render(<MAlert severity="error" />);
    const alertElement = screen.getByTestId('alert-element');
    expect(alertElement).toBeInTheDocument();
    const className = alertElement.getAttribute('class');
    expect(className?.includes('error')).toBeTruthy();
  });
});
