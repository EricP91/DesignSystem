import { render, screen, act, fireEvent, waitFor } from 'test-utils';
import React from 'react';
import { Default } from './TagCheckboxList.stories';
import { TagCheckboxListProps } from './TagCheckboxList';

describe('TagCheckboxListPopover', () => {
  it('should order assigned tags alphabetically', async () => {
    const assignedTags = [
      { id: '5', name: 'zzz', color: 'yellow' },
      { id: '4', name: 'ggg', color: 'purple' },
      { id: '3', name: 'aaa', color: 'green' },
    ];

    const unsortedInitialTags = assignedTags.map((t) => t.name);
    const sortedInitialTags = [...unsortedInitialTags].sort();

    render(<Default {...(Default.args as TagCheckboxListProps)} assignedTags={assignedTags} />);

    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-box'));
    });
    await waitFor(() => expect(screen.getByTestId('assigned-tags-list')).toBeInTheDocument());

    const sortedRenderedTags: string[] = [];
    [...screen.getByTestId('assigned-tags-list').children].forEach((el) =>
      sortedRenderedTags.push(el.querySelector('[data-testid="tag-item-text"]')?.innerHTML || '')
    );
    const sortedRenderedTagsStr = sortedRenderedTags.join(';');

    expect(sortedRenderedTagsStr).toEqual(sortedInitialTags.join(';'));
    expect(sortedRenderedTagsStr).not.toEqual(unsortedInitialTags.join(';'));
  });
});
