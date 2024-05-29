import { Story } from '@storybook/react';
import { useSnackbar } from 'notistack';
import React from 'react';
import { MButton } from '../index';
import ReadMoreOrLessText, { ReadMoreOrLessTextProps } from '../Text/ReadMoreOrLessText';
import { ReadMoreOrLessTextStory } from '../Text/ReadMoreOrLessText.stories';
import showSnackbar, { SnackBar } from './showSnackbar';

export default {
  title: 'Components/Snackbar',
};

const GetSnackbarTemplate = (snackBarArgs: SnackBar): JSX.Element => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <MButton
      onClick={() =>
        showSnackbar({
          ...snackBarArgs,
          enqueueSnackbar,
          closeSnackbar,
        })
      }
    >
      Click for snackbar
    </MButton>
  );
};

const Template: Story<SnackBar> = (args) => GetSnackbarTemplate(args);

export const Default = Template.bind({});
Default.args = {
  message: 'test',
  variant: 'success',
};

export const ReadMore = Template.bind({});
ReadMore.args = {
  message: <ReadMoreOrLessText {...(ReadMoreOrLessTextStory.args as ReadMoreOrLessTextProps)} />,
};

export const WidthActionButton = Template.bind({});
WidthActionButton.args = {
  message: 'test',
  variant: 'success',
  actionText: 'cancel',
  onAction: () => {},
};

export const Persistent = Template.bind({});
Persistent.args = {
  message: 'only closes when clicked on close icon',
  variant: 'success',
  persist: true,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

export const NoDuplicate = Template.bind({});
NoDuplicate.args = {
  message: 'only one snackbar with this key allowed',
  variant: 'success',
  persist: true,
  preventDuplicate: true,
  key: 'preciousKey',
};
