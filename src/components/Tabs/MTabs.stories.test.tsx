import { act, render, screen } from 'test-utils';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MTabsProps } from './MTabs';
import { Default } from './MTabs.stories';

it('should display the tabs component, the header buttons and the panel content', async () => {
  render(<Default {...(Default.args as MTabsProps)} />);
  expect(screen.getByTestId('tabs-container')).toBeInTheDocument();
  expect(screen.getByTestId('tab-title-0')).toBeInTheDocument();
  expect(screen.getByTestId('tab-title-1')).toBeInTheDocument();
  expect(screen.getByTestId('tab-title-2')).toBeInTheDocument();
  expect(screen.getByText((Default.args as MTabsProps)?.tabs[2]?.title)).toBeInTheDocument();
  expect(screen.getByTestId('tab-panel-0')).toBeInTheDocument();
  expect(screen.getByTestId('tab-panel-1')).toBeInTheDocument();
  expect(screen.getByTestId('tab-panel-2')).toBeInTheDocument();
  expect(screen.getByText('First tab content')).toBeInTheDocument();
  await act(async () => {
    userEvent.click(screen.getByTestId('tab-title-1'));
  });
  expect(screen.getByText('Second tab content')).toBeInTheDocument();
});
