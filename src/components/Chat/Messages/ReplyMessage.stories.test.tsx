import React from 'react';
import { render, screen } from 'test-utils';
import { ReplyMessageProps } from './ReplyMessage';
import {
  WithAudioAndText,
  WithImage,
  WithImageAndText,
  WithNoRootStyle,
  WithText,
  WithVideoAndText,
} from './ReplyMessage.stories';

test('should show with text story', () => {
  render(<WithText {...(WithText.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!'
    )
  ).toBeInTheDocument();
});

test('should show with image story', () => {
  render(<WithText {...(WithImage.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
});

test('should show with image and text story', () => {
  render(<WithText {...(WithImageAndText.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!'
    )
  ).toBeInTheDocument();
  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
});

test('should show with no root style story', () => {
  render(<WithText {...(WithNoRootStyle.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!'
    )
  ).toBeInTheDocument();
  expect(screen.getByTestId('reply-message')).not.toHaveStyle('width: 100%');
});

test('should show with video and text story', () => {
  render(<WithText {...(WithVideoAndText.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!'
    )
  ).toBeInTheDocument();
  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
  expect(screen.getByTestId('video-play-button')).toBeInTheDocument();
});

test('should show with audio and text story', () => {
  render(<WithText {...(WithAudioAndText.args as ReplyMessageProps)} />);

  expect(screen.getByText('Tomer Avni')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Hey John, I am looking for the best admin template. Could you help out here? 🤔 thanks in advance!'
    )
  ).toBeInTheDocument();
  expect(screen.getByText(`${WithAudioAndText.args?.audioTextFallback}`)).toBeInTheDocument();
});
