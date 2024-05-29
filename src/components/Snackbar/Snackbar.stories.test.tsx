import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import NotistackProvider from '../../providers/NotistackProvider';
import { ThemeConfig } from '../../theme';
import { Default, NoDuplicate, Persistent, WidthActionButton } from './Snackbar.stories';
import { SnackBar } from './showSnackbar';

it('should show snackbar in light mode', async () => {
  render(
    <ThemeConfig isLightMode>
      <NotistackProvider>
        <Default {...(Default.args as SnackBar)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => expect(screen.getByText('test')).toBeInTheDocument());
});
it('should show snackbar in dark mode', async () => {
  render(
    <ThemeConfig isLightMode={false}>
      <NotistackProvider>
        <Default {...(Default.args as SnackBar)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => expect(screen.getByText('test')).toBeInTheDocument());
});

it('should show snackbar with persistent prop', async () => {
  render(
    <ThemeConfig isLightMode={false}>
      <NotistackProvider>
        <Persistent {...(Persistent.args as SnackBar)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  const message = typeof Persistent?.args?.message === 'string' ? Persistent?.args?.message : '';
  await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
});

it('should show snackbar with no duplicate prop', async () => {
  render(
    <ThemeConfig isLightMode={false}>
      <NotistackProvider>
        <NoDuplicate {...(NoDuplicate.args as SnackBar)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  const message = typeof NoDuplicate?.args?.message === 'string' ? NoDuplicate?.args?.message : '';
  await waitFor(() => expect(screen.getByText(message)).toBeInTheDocument());
});

it('should show snackbar with action button', async () => {
  render(
    <ThemeConfig isLightMode={false}>
      <NotistackProvider>
        <WidthActionButton {...(WidthActionButton.args as SnackBar)} />
      </NotistackProvider>
    </ThemeConfig>
  );
  fireEvent.click(screen.getByRole('button'));
  await waitFor(() => expect(screen.getByTestId('action-button')).toBeInTheDocument());
});
