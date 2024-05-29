import { IconButton, List, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import { TrashIcon } from '../../../assets/icons';
import ContactListItem from './ContactListItem';
import { Contact } from './types';

const useStyles = makeStyles(() => ({
  listRoot: {
    height: '320px',
    margin: 0,
    padding: 0,
  },
  iconButton: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      height: 16,
      width: 16,
    },
  },
}));

export interface ContactListProps {
  data: Contact[];
  defaultName?: string;
  defaultIdentifier?: string;
  nameLabel?: (id: string) => string | undefined;
  identifierLabel?: (id: string) => string | undefined;
  className?: string;
  onRemove?: (id: string) => void;
  showRemove?: (contact: Contact) => boolean | undefined;
  removeText?: string;
  isLoading?: boolean;
}

function ContactList({
  data,
  defaultName = 'No name',
  defaultIdentifier = 'No ID',
  nameLabel = () => undefined,
  identifierLabel = () => undefined,
  className,
  onRemove = () => {},
  showRemove = () => false,
  removeText = 'Remove',
  isLoading = false,
}: ContactListProps): JSX.Element {
  const classes = useStyles();

  const getListItemSkeleton = (index: number): JSX.Element => (
    <ContactListItem key={index} id={`${index}`} isLoading={isLoading} />
  );

  const getListItemActionElement = (contact: Contact): JSX.Element => (
    <Tooltip title={removeText} arrow placement="top">
      <IconButton
        size="small"
        data-testid="contact-list-item-action-remove"
        className={classes.iconButton}
        onClick={() => {
          onRemove(contact.id);
        }}
      >
        <TrashIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );

  const getListItem = (contact: Contact): JSX.Element => (
    <ContactListItem
      {...contact}
      key={contact.id}
      defaultName={defaultName}
      defaultIdentifier={defaultIdentifier}
      nameLabel={nameLabel(contact.id)}
      identifierLabel={identifierLabel(contact.id)}
      showAction={showRemove(contact)}
      actionElement={getListItemActionElement(contact)}
    />
  );

  return (
    <List className={clsx(classes.listRoot, className)} data-testid="contact-list">
      {isLoading
        ? [...Array(3)].map((_, index) => getListItemSkeleton(index))
        : data.map((contact) => getListItem(contact))}
    </List>
  );
}

export default ContactList;
