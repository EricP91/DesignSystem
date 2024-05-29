import { render, screen, act } from 'test-utils';
import { MenuItem } from '@mui/material';
import React, { createRef } from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import MenuButton from './MenuButton';
import { PendingSubmissionIcon, ScanIcon } from '../../assets/icons';

describe('MenuButton', () => {
  const ref = createRef<{ handleClose: () => void }>();

  const menuButtonWrapper = (): JSX.Element => (
    <MenuButton ref={ref} buttonText="Menu Button">
      <MenuItem disableRipple>
        <PendingSubmissionIcon />
        Menu Item 1
      </MenuItem>
      <MenuItem disableRipple>
        <ScanIcon />
        Menu Item 2
      </MenuItem>
    </MenuButton>
  );

  it('it should render menu items on button click', () => {
    render(menuButtonWrapper());

    expect(screen.queryByText('Menu Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Menu Item 2')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Menu Button'));

    expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
    expect(screen.getByText('Menu Item 2')).toBeInTheDocument();
  });

  it('it should close menu when calling handleClose', async () => {
    render(menuButtonWrapper());

    fireEvent.click(screen.getByText('Menu Button'));
    act(() => {
      ref.current?.handleClose();
    });
    await waitFor(() => expect(screen.queryByText('Menu Item 1')).not.toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText('Menu Item 2')).not.toBeInTheDocument());
  });
});
