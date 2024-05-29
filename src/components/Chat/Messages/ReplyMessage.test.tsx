import React from 'react';
import { render, screen } from 'test-utils';
import ReplyMessage from './ReplyMessage';
import { ThemeConfig } from '../../../theme';

const imageSrc =
  'https://e7.pngegg.com/pngimages/670/630/png-clipart-super-meat-boy-forever-nintendo-switch-super-tofu-boy-minecraft-poggers-twitch-emote-video-game-playstation-4-thumbnail.png';

test('should show title', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage title="test title">test content</ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.getByText('test title')).toHaveStyle({ fontStyle: 'italic' });
});

test('should show content', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage title="test title">test content</ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.getByText('test content')).toBeInTheDocument();
});

test('should render image when imgSrc exists', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage title="test title" imageSrc={imageSrc} type="image">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
  expect(screen.queryByTestId('spinner')).toBeNull();
  expect(screen.queryByTestId('video-play-button')).toBeNull();
});

test('should not render image when imgSrc does not exists', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage title="test title" type="image">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.queryByTestId('reply-image')).toBeNull();
  expect(screen.queryByTestId('spinner')).toBeNull();
  expect(screen.queryByTestId('video-play-button')).toBeNull();
});

test('should show spinner when imageSrc does not exists and showImageLoader is true', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage showImageLoader title="test title" type="image">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.queryByTestId('reply-image')).toBeNull();
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
  expect(screen.queryByTestId('video-play-button')).toBeNull();
});

test('should not show spinner when imageSrc exists and showImageLoader is true', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage imageSrc={imageSrc} showImageLoader title="test title" type="image">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );
  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
  expect(screen.queryByTestId('spinner')).toBeNull();
  expect(screen.queryByTestId('video-play-button')).toBeNull();
});

test('should render image and video indication when type is video', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage imageSrc={imageSrc} showImageLoader title="test title" type="video">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.getByTestId('reply-image')).toBeInTheDocument();
  expect(screen.getByTestId('video-play-button')).toBeInTheDocument();
  expect(screen.queryByTestId('spinner')).toBeNull();
});

test('should render audio indication when type is audio', () => {
  render(
    <ThemeConfig isLightMode>
      <ReplyMessage title="test title" type="audio" audioTextFallback="Test audio">
        test content
      </ReplyMessage>
    </ThemeConfig>
  );

  expect(screen.queryByTestId('reply-image')).toBeNull();
  expect(screen.queryByTestId('video-play-button')).toBeNull();
  expect(screen.queryByTestId('spinner')).toBeNull();
  expect(screen.getByText('Test audio')).toBeInTheDocument();
});
