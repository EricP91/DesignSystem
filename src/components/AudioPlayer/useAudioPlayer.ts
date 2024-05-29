import { useState, useEffect, MutableRefObject, Dispatch, SetStateAction } from 'react';

interface AudioPlayerProps {
  currentTime: number;
  duration: number;
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  setSeekTime: Dispatch<SetStateAction<number | null | undefined>>;
  setCurrentTime: Dispatch<SetStateAction<number>>;
}

function useAudioPlayer(audioRef: MutableRefObject<HTMLAudioElement | null>): AudioPlayerProps {
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [seekTime, setSeekTime] = useState<number | null>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return undefined;
    }

    const setAudioData = (): void => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = (): void => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    if (seekTime && seekTime !== currentTime) {
      audio.currentTime = seekTime;
      setSeekTime(null);
    }

    if (currentTime === duration) {
      setPlaying(false);
      return undefined;
    }

    if (playing) audio.play();
    else audio.pause();

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  });

  return {
    currentTime,
    duration,
    playing,
    setPlaying,
    setSeekTime,
    setCurrentTime,
  };
}

export default useAudioPlayer;
