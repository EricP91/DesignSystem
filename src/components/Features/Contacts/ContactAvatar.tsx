import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import randomColor from 'randomcolor';
import React, { ForwardedRef } from 'react';

import { MTheme } from '../../../theme';
import { extractInitials } from '../../../util/initialsForAvatar';

const specialChars = '`!@#$%^&*()_+\\-=[\\]{};\':"\\\\|,.<>/?~';
const emojiChars = '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]';
const specialCharStr = `${emojiChars}|[${specialChars}]`;
const specialCharFinderRegExp = new RegExp(`^(${specialCharStr})`);
const specialCharReplacerRegExp = new RegExp(`${specialCharStr}`, 'g');

const containsSpecialChars = (str: string): boolean => specialCharFinderRegExp.test(str);

const getIdentifierInitials = (identifier: string): string =>
  identifier.replace(specialCharReplacerRegExp, '').trim().substring(0, 2).toUpperCase();

export const getColorRandomizeSeed = (
  name: string | null | undefined,
  appUserId: string | undefined,
  participantId: string | undefined,
  isUnidentified?: boolean
): string | undefined => {
  let seed = participantId;
  if (name?.trim() && !isUnidentified) {
    seed = name;
  }
  if (appUserId && !isUnidentified) {
    seed = appUserId;
  }
  return seed;
};

export const getRandomColorStyle = (seed?: string): { backgroundColor: string } => ({
  backgroundColor: randomColor({ seed, luminosity: 'dark' }),
});

const useStyles = makeStyles((theme: MTheme) => ({
  smaller: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: theme.spacing(1.25),
    fontWeight: 500,
    '& .MuiSvgIcon-root': {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.spacing(1.25),
    fontWeight: 500,
    '& .MuiSvgIcon-root': {
      width: theme.spacing(2.25),
      height: theme.spacing(2.25),
    },
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    fontSize: theme.spacing(1.75),
    fontWeight: 700,
    '& .MuiSvgIcon-root': {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    fontSize: theme.spacing(2.75),
    fontWeight: 700,
    '& .MuiSvgIcon-root': {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
}));

export interface ContactAvatarProps {
  size?: 'smaller' | 'small' | 'medium' | 'large';
  id?: string;
  image?: string;
  name?: string;
  identifier?: string;
  className?: string;
  isUnidentified?: boolean;
}

const ContactAvatar = React.forwardRef((props: ContactAvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    size = 'medium',
    id = '',
    image = '',
    name = '',
    identifier = '',
    className = '',
    isUnidentified = false,
    ...rest
  } = props;

  const classes = useStyles();
  const customStyle = getRandomColorStyle(getColorRandomizeSeed(name, identifier, id, isUnidentified));

  if (image) {
    return (
      <Avatar
        {...rest}
        data-testid="image-avatar"
        className={clsx(classes[size], className)}
        src={image}
        style={customStyle}
        ref={ref}
      />
    );
  }

  if (name && !isUnidentified) {
    const initials = containsSpecialChars(name) ? getIdentifierInitials(name) : extractInitials(name);
    return (
      <Avatar
        {...rest}
        className={clsx(classes[size], className)}
        alt={name}
        style={customStyle}
        data-testid="name-avatar"
        ref={ref}
      >
        {initials}
      </Avatar>
    );
  }

  if (identifier && !isUnidentified) {
    const identifierInitials = getIdentifierInitials(identifier);
    return (
      <Avatar
        {...rest}
        className={clsx(classes[size], className)}
        alt={name}
        style={customStyle}
        data-testid="id-avatar"
        ref={ref}
      >
        {identifierInitials}
      </Avatar>
    );
  }

  return (
    <Avatar
      {...rest}
      className={clsx(classes[size], className)}
      style={customStyle}
      data-testid="default-avatar"
      ref={ref}
    />
  );
});

export default React.memo(ContactAvatar);
