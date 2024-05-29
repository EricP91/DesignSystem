import { render, screen } from 'test-utils';
import React from 'react';
import { Default } from './TopicList.stories';
import { TopicListProps } from './TopicList';

it('should display 3 topics', () => {
  render(<Default {...(Default.args as TopicListProps)} />);
  expect(screen.getByText('Topic 1'));
  expect(screen.getByText('Topic 2'));
  expect(screen.getByText('Topic 3'));
});
