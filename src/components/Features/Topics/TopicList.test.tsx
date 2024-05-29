import { render, screen } from 'test-utils';
import React from 'react';
import TopicList, { TopicListProps } from './TopicList';

it('should display no topics', () => {
  const topics: TopicListProps['topics'] = [];
  render(<TopicList topics={topics} />);
  const topic = screen.queryByText('topic 1');
  expect(topic).toBeNull();
});

it('should display only one topic', () => {
  const topics = [
    {
      color: 'red',
      name: 'topic 1',
    },
  ];

  render(<TopicList topics={topics} />);
  const topic = screen.getByText('topic 1');
  expect(topic).toBeInTheDocument();
  expect(screen.queryByText('+')).toBeNull();
});

it('should display multiple topics', () => {
  const topics: TopicListProps['topics'] = [
    {
      color: 'red',
      name: 'topic 1',
    },
    {
      color: 'blue',
      name: 'topic 2',
    },
    {
      color: 'green',
      name: 'topic 3',
    },
  ];
  render(<TopicList topics={topics} />);
  expect(screen.getByText('topic 1')).toBeInTheDocument();
  expect(screen.getByText('topic 2')).toBeInTheDocument();
  expect(screen.getByText('topic 3')).toBeInTheDocument();
  expect(screen.queryByText('+')).toBeNull();
});
