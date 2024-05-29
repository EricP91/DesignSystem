import { render, screen, within } from 'test-utils';
import React from 'react';
import { CircularProgress } from '@mui/material';
import { Default, Completed, Cancelled, Uploading, CustomLabelAndIcon } from './MStatusTag.stories';
import { UPLOAD_STATUS } from './constants';

it('should render default tag', () => {
  render(<Default />);
  const chipElement = screen.getByTestId('status-tag-chip-element');
  const className = chipElement.getAttribute('class');
  expect(className?.includes('error')).toBeTruthy();
  const chipLabel = within(chipElement).getByText('Failed');
  expect(chipLabel).toBeInTheDocument();
});

it('should render completed tag', () => {
  render(<Completed status={UPLOAD_STATUS.COMPLETED} />);
  const chipElement = screen.getByTestId('status-tag-chip-element');
  const className = chipElement.getAttribute('class');
  expect(className?.includes('success')).toBeTruthy();
  const chipLabel = within(chipElement).getByText('Completed');
  expect(chipLabel).toBeInTheDocument();
});

it('should render cancelled tag', () => {
  render(<Cancelled status={UPLOAD_STATUS.CANCELLED} />);
  const chipElement = screen.getByTestId('status-tag-chip-element');
  const className = chipElement.getAttribute('class');
  expect(className?.includes('cancelled')).toBeTruthy();
  const chipLabel = within(chipElement).getByText('Canceled');
  expect(chipLabel).toBeInTheDocument();
});

it('should render Uploading tag', () => {
  render(<Uploading status={UPLOAD_STATUS.UPLOADING} />);
  const chipElement = screen.queryByTestId('status-tag-chip-element');
  expect(chipElement).not.toBeInTheDocument();
  const progress = screen.getByTestId('progress-element');
  expect(progress).toBeInTheDocument();
  expect(screen.getByText('Uploading')).toBeInTheDocument();
});

it('should render custom tag', () => {
  const args = {
    status: UPLOAD_STATUS.UPLOADING,
    label: 'In Upload with green progress',
    progressComponent: <CircularProgress size={16} color="success" />,
  };

  render(<CustomLabelAndIcon {...args} />);
  const chipElement = screen.queryByTestId('status-tag-chip-element');
  expect(chipElement).not.toBeInTheDocument();
  const progress = screen.queryByTestId('progress-element');
  expect(progress).not.toBeInTheDocument();
  expect(screen.getByText('In Upload with green progress')).toBeInTheDocument();
});
