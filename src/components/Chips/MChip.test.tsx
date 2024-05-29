import React from 'react';
import { render, screen } from 'test-utils';

import { ChatIcon } from '../../assets/icons';
import MChip from './MChip';

const DefaultMChipMock = { name: 'Locations', count: 32, selected: false };
const MChipWithIconMock = { name: 'Chats', count: 65, icon: <ChatIcon />, selected: true };
const zeroItemsMock = { name: 'Media', count: 0, selected: false };
const onlyTextChipMock = { name: 'Some Text' };

describe('MChip', () => {
  test('should render selected chip with icon', () => {
    render(<MChip {...MChipWithIconMock} />);
    expect(screen.getByTestId('chip-item-selected')).toBeInTheDocument();
    expect(screen.getByTestId('chip-item-selected').firstElementChild?.classList).toContain('MuiChip-icon');
  });

  test('should render default unselected chip', () => {
    render(<MChip {...DefaultMChipMock} />);
    expect(screen.getByTestId('chip-item-unselected')).toBeInTheDocument();
  });

  test('should render chip with zero events', () => {
    render(<MChip {...zeroItemsMock} />);
    expect(screen.getByTestId('chip-item-unselected').textContent).toContain('(0)');
  });

  test('should render chip with text only', () => {
    render(<MChip {...onlyTextChipMock} />);
    expect(screen.getByTestId('chip-item-unselected').textContent).toBe('Some Text');
  });
});
