import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import HighlightedText from './HighlightedText';
import OverflowTooltip from '../Tooltip/OverflowTooltip';
import { MTheme } from '../../theme';

export interface TextAndAvatarProps {
  value: string;
  renderer?: ReactElement;
  highlight?: string;
  className?: string;
  icon?: JSX.Element;
}

const useStyles = makeStyles((theme: MTheme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
  },
  avatar: {
    backgroundColor: 'transparent',
  },
  labelText: {
    fontWeight: 500,
  },
}));

const TextAndAvatar = ({ value = '', renderer, highlight, icon, className }: TextAndAvatarProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.item, className)}>
      {!!icon && (
        <Avatar data-testid="avatar" variant="square" className={clsx(classes.avatar, className, 'avatar')}>
          {icon}
        </Avatar>
      )}
      <OverflowTooltip arrow placement="bottom" title={value} followCursor>
        {renderer ? (
          <Typography component="span" display="inline" variant="body2" className={classes.labelText}>
            {React.cloneElement(renderer, { highlight })}
          </Typography>
        ) : (
          <HighlightedText
            display="inline"
            variant="body2"
            highlightClass={classes.highlightedText}
            highlight={highlight}
          >
            {value}
          </HighlightedText>
        )}
      </OverflowTooltip>
    </div>
  );
};

export default TextAndAvatar;
