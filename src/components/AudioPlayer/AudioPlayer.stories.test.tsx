import { render, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Default } from './AudioPlayer.stories';
import { AudioPlayerProps } from './AudioPlayer';

describe('AudioPlayerStories', () => {
  test('should render audio player', () => {
    render(<Default {...(Default.args as AudioPlayerProps)} />);
    expect(screen.getByTestId('audio-player')).toBeTruthy();
  });
});
