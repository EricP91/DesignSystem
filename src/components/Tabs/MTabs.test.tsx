import React from 'react';
import { fireEvent, render, screen, waitFor } from 'test-utils';
import { DocumentIcon, EqualizerIcon, ContactsIcon } from '../../assets/icons';
import MTabs from './MTabs';

const tabs = [
  {
    title: 'First tab',
    icon: <DocumentIcon />,
    content: <div>First tab content</div>,
  },
  {
    title: 'Second tab',
    icon: <EqualizerIcon />,
    content: <div>Second tab content</div>,
  },
  {
    title: 'Third tab',
    icon: <ContactsIcon />,
    content: <div>Third tab content</div>,
  },
];

describe('MTabs', () => {
  it('should set active tab when passing value', async () => {
    render(<MTabs tabs={tabs} value={2} />);
    await waitFor(() => {
      expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Third tab');
      expect(screen.getByText('Third tab content')).toBeInTheDocument();
    });
  });

  it('should call onChange with selected tab index when switching tabs', async () => {
    const onChange = jest.fn();
    render(<MTabs onChange={onChange} tabs={tabs} />);
    fireEvent.click(screen.getByText('Second tab'));
    await waitFor(() => expect(onChange).toHaveBeenCalledWith(expect.anything(), 1));
  });
});
