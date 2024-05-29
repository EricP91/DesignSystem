import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import CustomizationMenu from './CustomizationMenu';

const items = [
  { id: '1', value: 'item 1' },
  { id: '2', value: 'item 2' },
  { id: '3', value: 'item 3' },
];

describe('CustomizationMenu', () => {
  it('should use initial values', () => {
    render(<CustomizationMenu buttonText="Menu" items={items} initialSelection={{ 1: true, 3: true }} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(screen.getByLabelText('item 1')).toBeChecked();
    expect(screen.getByLabelText('item 2')).not.toBeChecked();
    expect(screen.getByLabelText('item 3')).toBeChecked();
  });

  it('should select all options when clicking on select all and no option was selected', () => {
    render(<CustomizationMenu buttonText="Menu" items={items} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    fireEvent.click(screen.getByLabelText('Select All'));
    expect(screen.getByLabelText('item 1')).toBeChecked();
    expect(screen.getByLabelText('item 2')).toBeChecked();
    expect(screen.getByLabelText('item 3')).toBeChecked();
  });

  it('should select all options when clicking on select all and some option was selected', () => {
    render(<CustomizationMenu buttonText="Menu" items={items} initialSelection={{ 1: true }} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    fireEvent.click(screen.getByLabelText('Select All'));
    expect(screen.getByLabelText('item 1')).toBeChecked();
    expect(screen.getByLabelText('item 2')).toBeChecked();
    expect(screen.getByLabelText('item 3')).toBeChecked();
  });

  it('should deselect all options when clicking on Select All and all options are selected', () => {
    render(<CustomizationMenu buttonText="Menu" initialSelection={{ 1: true, 2: true, 3: true }} items={items} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    fireEvent.click(screen.getByLabelText('Select All'));
    expect(screen.getByLabelText('item 1')).not.toBeChecked();
    expect(screen.getByLabelText('item 2')).not.toBeChecked();
    expect(screen.getByLabelText('item 3')).not.toBeChecked();
  });

  it('should have Select All be partially checked when only some items are selected', () => {
    render(<CustomizationMenu buttonText="Menu" initialSelection={{ 1: true, 2: true, 3: false }} items={items} />);
    fireEvent.click(screen.getByRole('button', { name: 'Menu' }));
    expect(screen.getByLabelText('Select All')).toHaveAttribute('data-indeterminate', 'true');
  });
});
