import { makeStyles } from '@mui/styles';
import { Story } from '@storybook/react';
import React from 'react';
import HighlightedText, { HighlightedTextProps } from './HighlightedText';

export default {
  title: 'Components/Text',
};

const useStyles = makeStyles(() => ({
  highlightClass: {
    backgroundColor: 'yellow',
    fontWeight: 500,
  },
}));

const Template: Story<HighlightedTextProps> = (args) => {
  const classes = useStyles();
  return <HighlightedText {...args} highlightClass={classes.highlightClass} />;
};

export const HighlightedTextVariant = Template.bind({});

HighlightedTextVariant.args = {
  highlight: 'highlight',
  children: 'Text to highlight',
  variant: 'subtitle1',
};
