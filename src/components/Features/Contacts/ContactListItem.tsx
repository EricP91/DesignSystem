import {
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Skeleton,
  Typography,
  TypographyProps,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { MTheme } from '../../../theme';
import HighlightedText from '../../Text/HighlightedText';
import OverflowTooltip from '../../Tooltip/OverflowTooltip';
import ContactAvatar from './ContactAvatar';
import { Contact } from './types';

const useStyles = makeStyles((theme: MTheme) => ({
  listRoot: {
    height: '320px',
    overflow: 'auto',
    margin: 0,
    padding: 0,
  },
  listItem: {
    padding: theme.spacing(0.5),
    '& .MuiListItemAvatar-root': {
      marginRight: theme.spacing(1.5),
      '& .MuiSvgIcon-root': {
        verticalAlign: 'middle',
      },
    },
    '& .MuiListItemText-root': {
      lineHeight: theme.spacing(2),

      '& .MuiListItemText-primary': {
        display: 'inline-block',
        width: '55%',
        marginRight: theme.spacing(1.5),
      },
      '& .MuiListItemText-secondary': {
        display: 'inline-block',
        width: '40%',
      },
      '&.actionHovered': {
        '& .MuiListItemText-primary': {
          width: '50%',
        },
        '& .MuiListItemText-secondary': {
          width: '35%',
        },
      },
    },
  },
  listItemTextLabel: {
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[0],
    borderRadius: theme.spacing(0.75),
    '& .MuiChip-label': {
      marginTop: 0,
    },
  },
  highlightedText: {
    padding: theme.spacing(0.25, 0.125),
    backgroundColor: theme.palette.warning.light,
  },
}));

export interface ContactListItemTextProps {
  text?: string;
  defaultText: string;
  label?: string;
  primary?: boolean;
  highlight?: string;
}

function ContactListItemText({
  text,
  defaultText,
  label,
  primary = false,
  highlight,
}: ContactListItemTextProps): JSX.Element {
  const classes = useStyles();
  const typographyProps: TypographyProps & { component: React.ElementType } = {
    component: 'span',
    variant: 'subtitle2',
    display: 'inline',
    fontWeight: primary ? 'bold' : 'initial',
  };
  return (
    <OverflowTooltip placement="top" title={text || defaultText} arrow>
      {highlight ? (
        <HighlightedText {...typographyProps} highlight={highlight} highlightClass={classes.highlightedText}>
          {text || ''}
        </HighlightedText>
      ) : (
        <>
          <Typography {...typographyProps}>{text || defaultText}</Typography>
          {label && <Chip label={label} size="small" color="primary" className={classes.listItemTextLabel} />}
        </>
      )}
    </OverflowTooltip>
  );
}

export interface ContactListItemProps extends Contact {
  defaultName?: string;
  nameLabel?: string;
  defaultIdentifier?: string;
  identifierLabel?: string;
  highlight?: string;
  onClick?: (id: string) => void;
  showAction?: boolean;
  actionElement?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

function ContactListItem({
  id,
  name,
  identifier,
  image,
  nameLabel,
  identifierLabel,
  defaultName = '',
  defaultIdentifier = '',
  highlight,
  onClick = () => {},
  showAction = false,
  actionElement,
  isLoading = false,
  className,
}: ContactListItemProps): JSX.Element {
  const classes = useStyles();
  const [isActionHovered, setIsActionHovered] = useState(false);
  return (
    <ListItem
      button
      key={id}
      className={clsx(classes.listItem, className)}
      onClick={() => {
        onClick(id);
      }}
      onMouseEnter={() => setIsActionHovered(true)}
      onMouseLeave={() => setIsActionHovered(false)}
      data-testid="contact-list-item"
    >
      <ListItemAvatar>
        {isLoading ? (
          <Skeleton variant="circular" height="32px" width="32px" data-testid="contact-list-item-avatar-skeleton" />
        ) : (
          <ContactAvatar size="smaller" id={id} name={name} image={image} identifier={identifier} />
        )}
      </ListItemAvatar>
      <ListItemText
        className={clsx(showAction && isActionHovered && 'actionHovered')}
        primary={
          isLoading ? (
            <Skeleton variant="text" height="18px" width="50%" data-testid="contact-list-item-text-primary-skeleton" />
          ) : (
            <ContactListItemText
              primary
              text={name}
              defaultText={defaultName}
              label={nameLabel}
              highlight={highlight}
            />
          )
        }
        secondary={
          isLoading ? (
            <Skeleton
              variant="text"
              height="18px"
              width="50%"
              data-testid="contact-list-item-text-secondary-skeleton"
            />
          ) : (
            <ContactListItemText
              text={identifier}
              defaultText={defaultIdentifier}
              label={identifierLabel}
              highlight={highlight}
            />
          )
        }
        secondaryTypographyProps={{ component: 'div' }}
      />
      {showAction && isActionHovered && (
        <ListItemSecondaryAction
          data-testid="contact-list-item-action"
          onMouseEnter={() => setIsActionHovered(true)}
          onMouseLeave={() => setIsActionHovered(false)}
        >
          {actionElement}
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
}

export default ContactListItem;
