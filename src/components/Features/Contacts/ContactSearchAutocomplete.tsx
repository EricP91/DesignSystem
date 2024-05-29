import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { SearchIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import ContactListItem from './ContactListItem';
import { Contact } from './types';
import { getContactSearchField } from './utils';

const useStyles = makeStyles((theme: MTheme) => ({
  searchInput: {
    margin: theme.spacing(0.25, 0),
  },
  paper: {
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[25]?.z12,
  },
  listbox: {
    maxHeight: 170,
  },
  option: {
    margin: 0,
    padding: 0,
    height: 40,
  },
  listItem: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export interface ContactSearchAutocompleteProps {
  data: Contact[];
  defaultName: string;
  defaultIdentifier: string;
  searchPlaceholder: string;
  onSelect: (contact: Contact) => void;
}

function ContactSearchAutocomplete({
  data,
  defaultName,
  defaultIdentifier,
  searchPlaceholder = 'Search...',
  onSelect,
}: ContactSearchAutocompleteProps): JSX.Element {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Autocomplete
      freeSolo
      disableClearable
      inputValue={searchQuery}
      options={data}
      classes={{
        option: classes.option,
        paper: classes.paper,
        listbox: classes.listbox,
      }}
      getOptionLabel={(option: string | Contact) => getContactSearchField(option as Contact)}
      renderOption={(props, option: Contact) => (
        <li {...props} key={`contact-list-item-${option.id}`}>
          <ContactListItem
            id={option.id}
            name={option.name}
            identifier={option?.identifier}
            image={option?.image}
            defaultName={defaultName}
            defaultIdentifier={defaultIdentifier}
            className={classes.listItem}
            highlight={searchQuery}
            onClick={() => {
              onSelect(option);
              setSearchQuery('');
            }}
          />
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            'data-testid': 'contact-search-input',
          }}
          className={classes.searchInput}
          type="search"
          label=""
          placeholder={searchPlaceholder}
          variant="outlined"
          size="small"
          margin="normal"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={searchQuery}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(evt.target.value);
          }}
        />
      )}
    />
  );
}

export default ContactSearchAutocomplete;
