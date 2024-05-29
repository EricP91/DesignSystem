import { render, fireEvent, screen } from 'test-utils';
import React from 'react';
import ReadMoreOrLessText, { ReadMoreOrLessTextProps } from './ReadMoreOrLessText';
import { ReadMoreOrLessTextStory } from './ReadMoreOrLessText.stories';

it('should show "Show more" text', async () => {
  render(<ReadMoreOrLessText {...(ReadMoreOrLessTextStory.args as ReadMoreOrLessTextProps)} />);
  expect(screen.getByText('Show more')).toBeInTheDocument();
});

it('should show "Show less" text', async () => {
  render(<ReadMoreOrLessText {...(ReadMoreOrLessTextStory.args as ReadMoreOrLessTextProps)} />);
  fireEvent.click(screen.getByText('Show more'));
  expect(screen.getByText('Show less')).toBeInTheDocument();
});
