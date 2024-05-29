import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import { MTheme } from '../../theme';
import HighlightedText from '../Text/HighlightedText';
// eslint-disable-next-line import/no-cycle
import OverflowTooltip from '../Tooltip/OverflowTooltip';

interface BaseAvatarProps {
  primaryText?: string | null;
  primaryTextMaxWidth?: number | string;
  primaryTextIcon?: React.ReactNode | null;
  secondaryText?: string | React.ReactNode | null;
  secondaryTextMaxWidth?: number | string;
  highlight?: string;
  className?: string;
  avatarStyle?: React.CSSProperties;
  secondaryTextTooltipClassname?: string;
}

interface AvatarWithChildren extends BaseAvatarProps {
  children: React.ReactNode;
  icon?: string;
}

export interface AvatarWithIcon extends BaseAvatarProps {
  icon: string;
  children?: React.ReactNode | string | null;
}

export type TwoLineAvatarProps = AvatarWithChildren | AvatarWithIcon;

export const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&.primary': {
      '& $primaryText': { ...theme.typography.caption, color: theme.palette.text.secondary },
      '& $secondaryText': { ...theme.typography.body1, color: theme.palette.text.primary, overflow: 'auto' },
      '& $highlightedSecondaryText': {
        padding: theme.spacing(0.125, 0.125),
        fontWeight: theme.typography.fontWeightBold,
      },
      '& .MuiAvatar-root': {
        alignSelf: 'baseline',
        fontSize: 48,
        width: 48,
        height: 48,
        backgroundColor: `${theme.palette.grey[500]}1E`,
        '& .MuiSvgIcon-root': {
          '& path': {
            fill: theme.palette.primary.main,
          },
        },
      },
    },
  },
  primaryText: {
    color: theme.palette.text.primary,
  },
  highlightedPrimaryText: {
    padding: theme.spacing(0.25, 0.125),
    backgroundColor: theme.palette.warning.light,
    fontWeight: theme.typography.fontWeightBold,
  },
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  highlightedSecondaryText: {
    backgroundColor: theme.palette.warning.light,
    fontWeight: 400,
  },
  tooltip: {
    width: 97,
  },
  avatar: {
    fontSize: theme.spacing(1.75),
  },
}));

function TwoLineDescriptionAvatar({
  children,
  icon,
  primaryText,
  primaryTextIcon = null,
  secondaryText,
  className = '',
  highlight,
  primaryTextMaxWidth = 97,
  secondaryTextMaxWidth = 97,
  avatarStyle,
  secondaryTextTooltipClassname = '',
}: TwoLineAvatarProps): JSX.Element {
  const classes = useStyles();

  return (
    <div>
      <Box className={clsx(classes.root, className)}>
        <Avatar
          data-testid="avatar"
          src={icon}
          className={clsx(classes.avatar, className, 'avatar')}
          style={avatarStyle}
        >
          {children}
        </Avatar>
        <Box sx={{ ml: 1.25, overflow: 'auto' }}>
          <Box sx={{ display: 'flex' }}>
            {primaryText && (
              <OverflowTooltip
                placement="top"
                title={primaryText}
                arrow
                followCursor
                className={className}
                style={{ maxWidth: primaryTextMaxWidth }}
              >
                <>
                  {highlight ? (
                    <HighlightedText
                      data-testid="primaryText"
                      variant="subtitle2"
                      className={classes.primaryText}
                      highlight={highlight || ''}
                      highlightClass={classes.highlightedPrimaryText}
                    >
                      {primaryText}
                    </HighlightedText>
                  ) : (
                    <Typography
                      data-testid="primaryText"
                      variant="subtitle2"
                      className={classes.primaryText}
                      display="inline"
                    >
                      {primaryText}
                    </Typography>
                  )}
                </>
              </OverflowTooltip>
            )}
            {primaryTextIcon}
          </Box>
          {secondaryText && typeof secondaryText === 'string' ? (
            <>
              {highlight ? (
                <OverflowTooltip
                  placement="top"
                  title={secondaryText}
                  arrow
                  followCursor
                  className={clsx(secondaryTextTooltipClassname, className)}
                  style={{ maxWidth: secondaryTextMaxWidth }}
                >
                  <HighlightedText
                    data-testid="secondaryText"
                    variant="body2"
                    display="inline"
                    className={classes.secondaryText}
                    highlight={highlight || ''}
                    highlightClass={classes.highlightedSecondaryText}
                  >
                    {secondaryText || ''}
                  </HighlightedText>
                </OverflowTooltip>
              ) : (
                <Typography
                  data-testid="secondaryText"
                  variant="body2"
                  className={classes.secondaryText}
                  display="inline"
                >
                  <OverflowTooltip
                    placement="top"
                    title={secondaryText}
                    arrow
                    followCursor
                    component="span"
                    className={clsx(secondaryTextTooltipClassname, className)}
                    style={{ maxWidth: secondaryTextMaxWidth }}
                  >
                    <>{secondaryText}</>
                  </OverflowTooltip>
                </Typography>
              )}
            </>
          ) : (
            <>{secondaryText}</>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default TwoLineDescriptionAvatar;
