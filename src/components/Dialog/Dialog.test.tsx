import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { ConfirmationDialog, NoCloseConfirmationDialog } from './Dialog.stories';
import { ConfirmationDialogProps } from './MDialog';

it('should render confirmation dialog', () => {
  render(<ConfirmationDialog {...(ConfirmationDialog.args as ConfirmationDialogProps)} />);
  expect(screen.getByTestId('dialog-title')).toHaveTextContent(ConfirmationDialog?.args?.title || '');
  expect(screen.getByTestId('dialog-close')).toBeTruthy();
  expect(screen.getByTestId('dialog-content')).toBeTruthy();
  expect(screen.getByTestId('dialog-actions')).toBeTruthy();
});

it('should close the dialog when clicking on close button', async () => {
  render(<ConfirmationDialog {...(ConfirmationDialog.args as ConfirmationDialogProps)} />);
  fireEvent.click(screen.getAllByTestId('dialog-close')[0]);
  await waitFor(() => screen.getAllByTestId('dialog-content'));
  expect(screen.getAllByTestId('dialog-content')[0]).toBeInTheDocument();
});

it('should close the dialog when clicking on close action button', async () => {
  render(<ConfirmationDialog {...(ConfirmationDialog.args as ConfirmationDialogProps)} />);
  fireEvent.click(screen.getAllByTestId('dialog-action-close')[0]);
  await waitFor(() => screen.getAllByTestId('dialog-content'));
  expect(screen.getAllByTestId('dialog-content')[0]).toBeInTheDocument();
});

it('should render no cancel confirmation dialog', () => {
  render(<NoCloseConfirmationDialog {...(NoCloseConfirmationDialog.args as ConfirmationDialogProps)} />);
  expect(screen.queryByTestId('dialog-close')).toBeNull();
  expect(screen.getByTestId('dialog-content')).toBeTruthy();
  expect(screen.getByTestId('dialog-actions')).toBeTruthy();
});

it('should close the no cancel confirmation dialog when clicking on close button', async () => {
  render(<NoCloseConfirmationDialog {...(NoCloseConfirmationDialog.args as ConfirmationDialogProps)} />);
  fireEvent.click(screen.getAllByTestId('dialog-action-close')[0]);
  await waitFor(() => screen.getAllByTestId('dialog-content'));
  expect(screen.getAllByTestId('dialog-content')[0]).toBeInTheDocument();
});
