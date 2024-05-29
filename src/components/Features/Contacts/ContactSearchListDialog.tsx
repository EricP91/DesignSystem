import { makeStyles } from '@mui/styles';
import React from 'react';
import { MTheme } from '../../../theme';
import MButton from '../../Button/MButton';
import MDialog from '../../Dialog/MDialog';
import ContactSearchList, { ContactSearchListWrapper } from './ContactSearchList';
import { Contact } from './types';

const useStyles = makeStyles((theme: MTheme) => ({
  closeButton: {
    fontSize: theme.spacing(1.75),
  },
}));

export interface ContactSearchListDialogProps {
  data?: Contact[];
  dataList?: JSX.Element;
  dataLength?: number;
  open: boolean;
  title?: string;
  type?: string;
  defaultName?: string;
  defaultIdentifier?: string;
  searchQuery?: string;
  onSearchChange?: (searchQuery: string) => void;
  searchPlaceholder?: string;
  noResultsText?: string;
  onClose: () => void;
  closeText?: string;
}

function ContactSearchListDialog({
  data = [],
  dataList,
  dataLength = 0,
  open,
  onClose,
  searchQuery = '',
  onSearchChange = () => {},
  defaultName,
  defaultIdentifier,
  searchPlaceholder,
  noResultsText,
  closeText = 'Close',
  title = 'Search contacts',
  type = 'contacts',
}: ContactSearchListDialogProps): JSX.Element {
  const classes = useStyles();

  return (
    <MDialog
      maxWidth="xs"
      title={title}
      subtitle={`${dataList ? dataLength : data.length} ${type}`}
      open={open}
      onClose={onClose}
      content={
        dataList ? (
          <ContactSearchListWrapper
            dataList={dataList}
            noResultsText={noResultsText}
            searchQuery={searchQuery}
            searchPlaceholder={searchPlaceholder}
            onSearchChange={onSearchChange}
            dataLength={dataLength}
          />
        ) : (
          <ContactSearchList
            data={data}
            defaultName={defaultName}
            defaultIdentifier={defaultIdentifier}
            searchPlaceholder={searchPlaceholder}
            noResultsText={noResultsText}
          />
        )
      }
      actions={
        <MButton
          size="medium"
          variant="outlined"
          data-testid="contact-search-list-dialog-close-button"
          className={classes.closeButton}
          onClick={onClose}
        >
          {closeText}
        </MButton>
      }
    />
  );
}

export default ContactSearchListDialog;
