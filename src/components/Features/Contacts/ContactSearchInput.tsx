import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { SearchIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  searchInput: {
    margin: theme.spacing(0.25, 0),
  },
}));

export interface ContactSearchInputProps {
  value?: string;
  placeholder?: string;
  onChange: (searchQuery: string) => void;
}

function ContactSearchInput({ value = '', placeholder = '', onChange }: ContactSearchInputProps): JSX.Element {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState(value);

  const onChangeSearchQuery = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const currentSearchQuery = evt.target.value;
    setSearchQuery(currentSearchQuery);
    onChange(currentSearchQuery);
  };

  return (
    <TextField
      className={classes.searchInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        inputProps: { 'data-testid': 'contact-search-input' },
      }}
      fullWidth
      type="search"
      label=""
      placeholder={placeholder}
      variant="outlined"
      size="small"
      margin="normal"
      value={searchQuery}
      onChange={onChangeSearchQuery}
    />
  );
}

export default ContactSearchInput;
