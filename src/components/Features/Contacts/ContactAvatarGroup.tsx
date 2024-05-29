import { Box, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { ForwardedRef, useRef } from 'react';
import HighlightedText from '../../Text/HighlightedText';
import { MTheme } from '../../../theme';
import AvatarGroup from '../../AvatarGroup/AvatarGroup';
import ContactAvatar from './ContactAvatar';
import { Contact } from './types';

const useStyles = makeStyles((theme: MTheme) => ({
  avatarTooltip: {
    width: 22,
    height: 22,
    marginRight: theme.spacing(0.5),
  },
  avatarOne: {
    '&.MuiAvatarGroup-avatar': {
      fontSize: theme.spacing(1.5),
      fontWeight: 500,
    },
  },
  avatarGroup: {
    '& > *': { width: 32, height: 32 },
    '& .MuiAvatarGroup-extra-avatar': {
      backgroundColor: theme.palette.primary.lighter,
      color: theme.palette.primary.dark,
      fontSize: theme.spacing(1.5),
      lineHeight: theme.spacing(2.25),
      fontWeight: 700,
    },
  },
  tooltip: {
    padding: theme.spacing(1.5),
    wordBreak: 'break-word',
  },
  tooltipSecondaryText: {
    fontWeight: 400,
  },
  highlight: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.ui.mutedHeavy,
  },
}));

export interface ContactAvatarGroupProps {
  max: number;
  data: Contact[];
  onClickViewMore: () => void;
  className?: string;
  fontSize?: 'small' | 'medium';
  numberOfAllContacts?: number;
  badgeContent?: React.ReactNode | number | string;
  highlight?: string;
}

function ContactAvatarGroup({
  data: contacts,
  max,
  onClickViewMore,
  className = '',
  fontSize = 'small',
  numberOfAllContacts,
  badgeContent = 0,
  highlight = '',
}: ContactAvatarGroupProps): JSX.Element {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>();

  return (
    <AvatarGroup
      handleClickOnExtraAvatars={onClickViewMore}
      max={max}
      className={clsx(classes.avatarGroup, className)}
      numberOfAllContacts={numberOfAllContacts}
      badgeContent={badgeContent}
      data-testid="contact-avatar-group"
    >
      {contacts.map((contact) => (
        <Tooltip
          data-testid="contact-avatar-tooltip"
          key={contact.id}
          arrow
          classes={{ tooltip: classes.tooltip }}
          title={
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{ display: 'flex', alignSelf: 'flex-start', mr: 1 }}
                  data-testid="contact-avatar-tooltip-content"
                >
                  <ContactAvatar
                    className={classes.avatarTooltip}
                    size="small"
                    id={contact.id}
                    image={contact.image}
                    name={contact.name}
                    identifier={contact.identifier}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {highlight ? (
                    <HighlightedText highlight={highlight} highlightClass={classes.highlight} variant="caption">
                      {contact.name ?? ''}
                    </HighlightedText>
                  ) : (
                    <Typography variant="caption">{contact.name}</Typography>
                  )}

                  {highlight ? (
                    <HighlightedText highlight={highlight} highlightClass={classes.highlight} variant="caption">
                      {contact.identifier ?? ''}
                    </HighlightedText>
                  ) : (
                    <Typography variant="caption" className={classes.tooltipSecondaryText}>
                      {contact.identifier}
                    </Typography>
                  )}
                </Box>
              </Box>
            </>
          }
        >
          <ContactAvatar
            size={fontSize}
            id={contact.id}
            image={contact.image}
            name={contact.name}
            identifier={contact.identifier}
            ref={ref as ForwardedRef<HTMLDivElement>}
          />
        </Tooltip>
      ))}
    </AvatarGroup>
  );
}

export default ContactAvatarGroup;
