import { render, screen } from 'test-utils';
import React from 'react';
import TagList from './TagList';

it('should display tag list', () => {
  const tags = [
    {
      color: 'red',
      name: 'tag1',
    },
    {
      color: 'blue',
      name: 'tag2',
    },
  ];
  render(<TagList tags={tags} />);
  const tag1 = screen.getByText('tag1');
  expect(tag1?.parentElement?.previousSibling).toHaveStyle({ backgroundColor: 'red' });

  const tag2 = screen.getByText('tag2');
  expect(tag2?.parentElement?.previousSibling).toHaveStyle({ backgroundColor: 'blue' });
});
