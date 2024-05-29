import React, { useRef } from 'react';
import { addSeconds, format } from 'date-fns';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MTheme } from '../../theme';

interface AudioPlayerBarProps {
  duration: number;
  currentTime: number;
  onTimeUpdate: (number: number) => void;
  timeFormat?: string;
}

export interface AudioPlayerStyleProps {
  percentage: number;
}

const useStyles = makeStyles((theme: MTheme) => ({
  bar: {
    userSelect: 'none',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3.25),
  },
  time: {
    color: 'white',
  },
  progress: ({ percentage }: AudioPlayerStyleProps) => ({
    flex: 1,
    borderRadius: '3px',
    height: 3,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(0.5),
    background: `linear-gradient(to right, white ${percentage}%, ${theme.palette.grey[600]} 0)`,
  }),
  knob: ({ percentage }: AudioPlayerStyleProps) => ({
    left: `${percentage - 2}%`,
  }),
}));

export default function AudioPlayerBar({
  duration,
  currentTime,
  onTimeUpdate,
  timeFormat = 'm:ss',
}: AudioPlayerBarProps): JSX.Element {
  const currentPercentage = (currentTime / duration) * 100 || 0;

  const classes = useStyles({ percentage: currentPercentage });
  const progressBarRef = useRef<HTMLDivElement>(null);

  function formatBarDuration(barDuration: number): string {
    const durationInSeconds = addSeconds(new Date(0), barDuration);
    return format(durationInSeconds, timeFormat);
  }

  function calculateSeekTime(event: MouseEvent | React.MouseEvent): number {
    const clickPositionInPage = event.pageX;
    const bar = progressBarRef.current;
    const barStart = bar ? bar.getBoundingClientRect().left + window.scrollX : 0;
    const barWidth = bar ? bar.offsetWidth : 0;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(event: React.MouseEvent): void {
    onTimeUpdate(calculateSeekTime(event));

    const updateTimeOnMove = (mouseEvent: MouseEvent): void => {
      onTimeUpdate(calculateSeekTime(mouseEvent));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }

  return (
    <div className={classes.bar}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div data-testid="progress-bar" ref={progressBarRef} className={classes.progress} onMouseDown={handleTimeDrag}>
        <span className={classes.knob} />
      </div>
      <div>
        <Typography variant="caption" className={classes.time}>{`${formatBarDuration(
          currentTime
        )} / ${formatBarDuration(duration)}`}</Typography>
      </div>
    </div>
  );
}
