import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act, fireEvent, render, screen, waitFor } from 'test-utils';

import { SuspiciousActivityProps } from './SuspiciousActivity';
import {
  Default as SuspiciousActivityDefault,
  EmptyState as SuspiciousActivityEmptyState,
  WithDropdown as SuspiciousActivityWithDropdown,
  WithGoTo as SuspiciousActivityWithGoTo,
  WithInfo as SuspiciousActivityWithInfo,
} from './SuspiciousActivity.stories';

describe('SuspiciousActivity', () => {
  const assertSuspiciousActivityRequiredProps = (args?: Partial<SuspiciousActivityProps>): void => {
    expect(screen.getByTestId('suspicious-activity-icon')).toBeInTheDocument();
    expect(screen.getByTestId('suspicious-activity-count-text')).toBeInTheDocument();
    expect(screen.getByTestId('suspicious-activity-count-text').textContent).toContain(args?.count);
    expect(screen.getByTestId('suspicious-activity-label')).toBeInTheDocument();
    expect(screen.getByTestId('suspicious-activity-label').textContent).toContain(args?.label);
  };

  test('should render the component with icon, count and label', () => {
    const { args } = SuspiciousActivityDefault;
    render(<SuspiciousActivityDefault {...(args as SuspiciousActivityProps)} />);
    assertSuspiciousActivityRequiredProps(args);
  });

  test('should render the component with empty state', () => {
    const { args } = SuspiciousActivityEmptyState;
    render(<SuspiciousActivityEmptyState {...(args as SuspiciousActivityProps)} />);
    assertSuspiciousActivityRequiredProps(args);
  });

  test('should render the go to anchor button link ', () => {
    const { args } = SuspiciousActivityWithGoTo;
    render(
      <BrowserRouter>
        <SuspiciousActivityWithGoTo {...(args as SuspiciousActivityProps)} />
      </BrowserRouter>
    );
    assertSuspiciousActivityRequiredProps(args);
    fireEvent.click(screen.getByTestId('suspicious-activity-go-to-anchor'));
  });

  test('should render the tooltip when hovering info button', () => {
    const { args } = SuspiciousActivityWithInfo;
    render(<SuspiciousActivityWithInfo {...(args as SuspiciousActivityProps)} />);
    assertSuspiciousActivityRequiredProps(args);
    fireEvent.mouseOver(screen.getByTestId('suspicious-activity-info-button'));
    waitFor(() => expect(screen.findByText(`${args?.infoTooltip}`)).toBeInTheDocument());
  });

  test('should toggle the dropdown content when clicking the button', () => {
    const { args } = SuspiciousActivityWithDropdown;
    render(<SuspiciousActivityWithDropdown {...(args as SuspiciousActivityProps)} />);
    assertSuspiciousActivityRequiredProps(args);
    act(() => {
      fireEvent.click(screen.getByTestId('suspicious-activity-dropdown-button'));
    });
    waitFor(() => expect(screen.getByTestId('suspicious-activity-dropdown-content')).toBeInTheDocument());
    act(() => {
      fireEvent.click(window);
    });
    waitFor(() => expect(screen.getByTestId('suspicious-activity-dropdown-content')).not.toBeInTheDocument());
  });
});
