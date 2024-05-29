import { fireEvent, render, screen, waitFor } from 'test-utils';
import React from 'react';
import { Custom as ContactSearchList } from './ContactSearchList.stories';
import { ContactSearchListProps } from './ContactSearchList';

describe('ContactSearchList', () => {
  test('should render contact search list', () => {
    render(<ContactSearchList {...(ContactSearchList.args as ContactSearchListProps)} />);
    expect(screen.getByTestId('contact-search-input')).toBeInTheDocument();
    expect(screen.getByTestId('contact-search-input').getAttribute('placeholder')).toEqual('Search contact');
  });

  test('should display no results when there are no contacts', async () => {
    render(<ContactSearchList {...ContactSearchList.args} data={[]} />);
    expect(screen.getAllByTestId('contact-search-list-no-results')[0]).toBeInTheDocument();
  });

  test('should search participants when the search query is provided', async () => {
    render(<ContactSearchList {...(ContactSearchList.args as ContactSearchListProps)} />);
    fireEvent.change(screen.getByTestId('contact-search-input'), {
      target: { value: 'john' },
    });
    await waitFor(() => screen.getByTestId('contact-list'));
    expect(screen.getAllByTestId('contact-list-item').length).toBe(2);
  });
});
