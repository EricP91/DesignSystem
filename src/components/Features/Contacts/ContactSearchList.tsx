import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactSearchInput from './ContactSearchInput';
import { Contact } from './types';
import { searchContactsByQuery } from './utils';

const useStyles = makeStyles(() => ({
  contactList: {
    overflow: 'auto',
  },
}));

export interface ContactSearchListWrapperProps {
  searchPlaceholder?: string;
  searchQuery?: string;
  onSearchChange: (searchQuery: string) => void;
  dataList: JSX.Element;
  dataLength: number;
  noResultsText?: string;
}

export function ContactSearchListWrapper({
  searchPlaceholder = 'Search...',
  searchQuery = '',
  onSearchChange,
  noResultsText = 'No results',
  dataList,
  dataLength = 0,
}: ContactSearchListWrapperProps): JSX.Element {
  return (
    <>
      <Box mb={2.5}>
        <ContactSearchInput value={searchQuery} placeholder={searchPlaceholder} onChange={onSearchChange} />
      </Box>
      {dataLength ? (
        dataList
      ) : (
        <Box
          height={320}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          data-testid="contact-search-list-no-results"
        >
          <Typography align="center" variant="body1">
            {noResultsText}
          </Typography>
        </Box>
      )}
    </>
  );
}

export interface ContactSearchListProps {
  data: Contact[];
  defaultName?: string;
  defaultIdentifier?: string;
  searchQuery?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
}

function ContactSearchList({
  data,
  defaultName,
  defaultIdentifier,
  searchPlaceholder = 'Search...',
  noResultsText = 'No results',
}: ContactSearchListProps): JSX.Element {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState(data);

  const setSearchResultsOnChange = (searchQuery: string): void => {
    setSearchResults(searchQuery ? searchContactsByQuery(data, searchQuery) : data);
  };

  return (
    <ContactSearchListWrapper
      searchPlaceholder={searchPlaceholder}
      onSearchChange={setSearchResultsOnChange}
      noResultsText={noResultsText}
      dataList={
        <ContactList
          className={classes.contactList}
          data={searchResults}
          defaultName={defaultName}
          defaultIdentifier={defaultIdentifier}
        />
      }
      dataLength={data.length}
    />
  );
}

export default ContactSearchList;
