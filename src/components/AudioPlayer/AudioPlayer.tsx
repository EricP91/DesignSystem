import React, { ReactEventHandler } from 'react';
import { makeStyles } from '@mui/styles';
import { Pause, PlayArrow } from '@mui/icons-material';
import AudioPlayerBar from './AudioPlayerBar';
import useAudioPlayer from './useAudioPlayer';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  player: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    width: '100%',
    backgroundColor: theme.palette.grey[1300_45],
    borderRadius: theme.spacing(1),
  },
  controls: {
    flexGrow: 1,
    margin: theme.spacing(0, 2.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
}));

export interface AudioPlayerProps {
  src: string;
  onPlay?: ReactEventHandler<HTMLAudioElement>;
  onEnded?: ReactEventHandler<HTMLAudioElement>;
  duration?: number;
}

function AudioPlayer({ src, onPlay, onEnded, duration }: AudioPlayerProps): JSX.Element {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const { currentTime, duration: audioPlayerDuration, playing, setPlaying, setSeekTime } = useAudioPlayer(audioRef);
  const onPlayClick = (): void => {
    setPlaying(true);
  };
  const onPauseClick = (): void => {
    setPlaying(false);
  };
  const classes = useStyles();

  return (
    <div className={classes.player}>
      <audio onPlay={onPlay} onEnded={onEnded} data-testid="audio-player" ref={audioRef}>
        <source src={src} />
      </audio>
      <div className={classes.controls}>
        {playing ? (
          <Pause data-testid="pause-button" onClick={onPauseClick} />
        ) : (
          <PlayArrow data-testid="play-button" onClick={onPlayClick} />
        )}
        <AudioPlayerBar
          currentTime={currentTime}
          duration={duration || audioPlayerDuration}
          onTimeUpdate={setSeekTime}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
