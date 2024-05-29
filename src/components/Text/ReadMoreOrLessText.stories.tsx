import { makeStyles } from '@mui/styles';
import { Story } from '@storybook/react';
import React from 'react';
import HighlightedText from './HighlightedText';
import ReadMoreOrLessText, { ReadMoreOrLessTextProps } from './ReadMoreOrLessText';

export default {
  title: 'Components/Text',
};

const Template: Story<ReadMoreOrLessTextProps> = (args) => <ReadMoreOrLessText {...args} />;

export const ReadMoreOrLessTextStory = Template.bind({});

ReadMoreOrLessTextStory.args = {
  text: 'long long long longlonglong long long long long long long long long long long long long longlonglong long long long long long long text',
  maxLetters: 45,
};

const ShortText: Story<ReadMoreOrLessTextProps> = (args) => <ReadMoreOrLessText {...args} />;

export const ShortTextWithReadMoreOrLessStory = ShortText.bind({});

ShortTextWithReadMoreOrLessStory.args = {
  text: 'Short text',
  maxLetters: 45,
};

const ReadMoreOrLessWithHighlightText: Story<ReadMoreOrLessTextProps> = (args) => <ReadMoreOrLessText {...args} />;

export const ReadMoreOrLessWithHighlightTextStory = ReadMoreOrLessWithHighlightText.bind({});

const useStyles = makeStyles(() => ({
  highlightClass: {
    backgroundColor: 'yellow',
    fontWeight: 500,
    display: 'inline',
  },
}));

ReadMoreOrLessWithHighlightTextStory.args = {
  text: 'long long long highlight longlonglong long long long long long long long long long long long long longlonglong long long long long long highlight long text',
  maxLetters: 45,
  textWrapper: (children: string) => (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <HighlightedText variant="body2" highlight="highlight" display="inline" highlightClass={useStyles().highlightClass}>
      {children}
    </HighlightedText>
  ),
};
