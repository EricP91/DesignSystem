import { InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { SearchIcon } from '../../assets/icons';
import { MTheme } from '../../theme';

const useStyles = makeStyles((theme: MTheme) => ({
  searchInput: {
    margin: theme.spacing(0.25, 0),
  },
}));

export interface SearchInputProps {
  placeholder?: string;
  searchQuery: string;
  onChangeSearchQuery: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ placeholder = '', searchQuery, onChangeSearchQuery }: SearchInputProps): JSX.Element {
  const classes = useStyles();

  return (
    <TextField
      className={classes.searchInput}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        inputProps: { 'data-testid': 'search-input' },
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

export default SearchInput;
