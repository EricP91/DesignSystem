import { render, screen, fireEvent } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import AudioPlayer from './AudioPlayer';
import * as hooks from './useAudioPlayer';

const useAudioPlayerMock = {
  currentTime: 0,
  duration: 0,
  playing: false,
  setPlaying: jest.fn(),
  setSeekTime: jest.fn(),
  setCurrentTime: jest.fn(),
};

describe('AudioPlayer', () => {
  const audioSrc = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3';

  beforeEach(() => {
    useAudioPlayerMock.setSeekTime.mockClear();
    useAudioPlayerMock.setPlaying.mockClear();
    useAudioPlayerMock.setCurrentTime.mockClear();
  });

  test('should show pause button when playing', async () => {
    useAudioPlayerMock.playing = true;
    jest.spyOn(hooks, 'default').mockReturnValue(useAudioPlayerMock);

    render(<AudioPlayer src={audioSrc} />);
    expect(screen.getByTestId('pause-button')).toBeInTheDocument();
  });

  test('should show play button when pausing', async () => {
    useAudioPlayerMock.playing = false;
    jest.spyOn(hooks, 'default').mockReturnValue(useAudioPlayerMock);

    render(<AudioPlayer src={audioSrc} />);
    expect(screen.getByTestId('play-button')).toBeInTheDocument();
  });

  test('should reset play time to 0 and setPlaying as true when clicking on play button', async () => {
    jest.spyOn(hooks, 'default').mockReturnValue(useAudioPlayerMock);

    render(<AudioPlayer src={audioSrc} />);
    fireEvent.click(screen.getByTestId('play-button'));
    expect(useAudioPlayerMock.setPlaying).toBeCalledWith(true);
  });

  test('should reset play time to 0 and setPlaying as true when clicking on play button', async () => {
    useAudioPlayerMock.playing = true;
    jest.spyOn(hooks, 'default').mockReturnValue(useAudioPlayerMock);

    render(<AudioPlayer src={audioSrc} />);
    fireEvent.click(screen.getByTestId('pause-button'));
    expect(useAudioPlayerMock.setPlaying).toBeCalledWith(false);
  });
});
