import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { TopicChipListProps } from './TopicChipList';
import {
  Default as TopicChipListDefault,
  WithContainer as TopicChipListWithContainer,
  WithFilteredTopics,
  WithManyFilteredTopicsAndContainer,
} from './TopicChipList.stories';

const setTopicPopperOpen = jest.fn();
jest.mock('react', () => {
  const actualReact = jest.requireActual('react');

  return {
    ...actualReact,
    useState: jest.fn(),
  };
});

describe('TopicChipList', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jest.spyOn(React, 'useState').mockImplementation((topicPopperOpen) => [topicPopperOpen, setTopicPopperOpen]);
  });

  afterEach(() => {
    setTopicPopperOpen.mockClear();
  });

  test('should render topic chip list default', () => {
    const { args } = TopicChipListDefault;
    render(<TopicChipListDefault {...(args as TopicChipListProps)} />);
    expect(screen.getByText(`${args?.topicsText}:`)).toBeTruthy();
    expect(screen.getByTestId('topic-chip-list-hashtag-icon')).toBeInTheDocument();
    expect(screen.getAllByTestId('topic-chip-list-item').length).toBe(args?.topics?.length);
  });

  test('should render no list items', () => {
    const { args } = TopicChipListDefault;
    render(<TopicChipListDefault {...(args as TopicChipListProps)} topics={[]} />);
    expect(screen.getByText(`${args?.topicsText}:`)).toBeTruthy();
    expect(screen.getByTestId('topic-chip-list-hashtag-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('topic-chip-list-item')).toBeNull();
  });

  test('should render y/x topics when topics are filtered', () => {
    const { args } = WithFilteredTopics;
    render(<WithFilteredTopics {...(args as TopicChipListProps)} />);
    expect(screen.getByText(`${args?.topicsText}:`)).toBeTruthy();
    expect(screen.getByTestId('topic-chip-list-hashtag-icon')).toBeInTheDocument();
    expect(screen.getAllByTestId('topic-chip-list-item').length).toBe(args?.filteredTopics?.length);
  });

  test('should open popper when hovering over the topics icon and topics are filtered', () => {
    const { args } = WithFilteredTopics;
    render(<WithFilteredTopics {...(args as TopicChipListProps)} />);
    expect(screen.getByText(`${args?.topicsText}:`)).toBeTruthy();
    fireEvent.mouseOver(screen.getByTestId('topic-chip-list-hashtag-icon'));
    expect(setTopicPopperOpen).toHaveBeenCalledWith(true);
  });

  it('should display tooltip text on hover', () => {
    const { args } = TopicChipListWithContainer;
    render(<TopicChipListWithContainer {...(args as TopicChipListProps)} />);
    fireEvent.mouseOver(screen.getByTestId('topic-chip-list-with-overflow-tooltip'));
  });

  test('should display the correct filtered topics out of chat topics', () => {
    const { args } = WithManyFilteredTopicsAndContainer;
    render(<WithFilteredTopics {...(args as TopicChipListProps)} />);
    const expectedString = `${args?.topicsText}`;
    expect(screen.getByTestId('topic-chip-list-number')).toHaveTextContent(expectedString);
  });
});
