import { Autocomplete, Box, createFilterOptions, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useCallback, useMemo } from 'react';
import { AutocompleteRenderOptionState } from '@mui/material/Autocomplete/Autocomplete';
import HighlightedText from '../Text/HighlightedText';
import { MTheme } from '../../theme';

export interface AutocompleteOption {
  id: number;
  label?: string;
  text: string;
  textSuffix?: string;
}

export interface MAutocompleteProps {
  label: string;
  options: AutocompleteOption[];
  autocompleteClassName?: string;
  textClassName?: string;
  textSuffixClassName?: string;
  onChangeAutocomplete: (selectedOption: AutocompleteOption | null) => void;
  preselectedOption?: AutocompleteOption;
}

const useStyles = makeStyles((theme: MTheme) => ({
  optionItem: {
    padding: theme.spacing(0.5, 1, 0.5, 1),
    margin: theme.spacing(0, 1, 0, 1),
    '&:hover': {
      backgroundColor: theme.palette.grey[1600],
    },
    '&.Mui-focused ': {
      backgroundColor: theme.palette.grey[1600],
    },
  },
  optionSelected: {
    backgroundColor: theme.palette.primary.light,
  },
  highlightedText: {
    backgroundColor: theme.palette.warning.light,
  },
  boldText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const findCommonSubstring = (stringOne: string, stringTwo: string): string =>
  stringOne
    ?.toLowerCase()
    .trim()
    .replace(/,/g, '')
    .split(' ')
    .find((word) => stringTwo?.toLowerCase().trim().indexOf(word.trim()) !== -1) || '';

const displaySelectedOption = (option: AutocompleteOption): string =>
  option.label || (option.textSuffix ? `${option.text} ${option.textSuffix}` : option.text);

const filterOptions = createFilterOptions({
  stringify: (option: AutocompleteOption) => `${option.text.trim()}${option.textSuffix}`,
});

function MAutocomplete(props: MAutocompleteProps): JSX.Element {
  const {
    onChangeAutocomplete,
    label,
    options,
    autocompleteClassName,
    textClassName,
    textSuffixClassName,
    preselectedOption,
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState<AutocompleteOption | null>(preselectedOption || null);
  const [inputValue, setInputValue] = React.useState<string>('');

  const opts = useMemo(() => options.map((option) => ({ ...option, textSuffix: option.textSuffix || ' ' })), [options]);

  const renderOption = useCallback(
    (
      optionProps: React.HTMLAttributes<HTMLLIElement>,
      option: AutocompleteOption,
      state: AutocompleteRenderOptionState
    ): JSX.Element => {
      const textWords = option.text?.trim().split(' ');
      const suffixWords = option.textSuffix?.trim().split(' ');

      return (
        <li
          {...optionProps}
          className={clsx(classes.optionItem, state.selected && classes.optionSelected)}
          data-testid={`autocomplete-option-${option.id}`}
        >
          {textWords && textWords.length
            ? textWords.map((word: string) => (
                <HighlightedText
                  key={word}
                  variant="textMedium"
                  className={clsx(classes.boldText, textClassName)}
                  highlight={inputValue ? findCommonSubstring(inputValue, word) : ''}
                  highlightClass={classes.highlightedText}
                >
                  {` ${word}`}
                </HighlightedText>
              ))
            : null}
          {suffixWords && suffixWords.length
            ? suffixWords.map((word: string) => (
                <HighlightedText
                  key={word}
                  variant="body2"
                  display="inline"
                  className={textSuffixClassName}
                  highlight={inputValue ? findCommonSubstring(inputValue, word) : ''}
                  highlightClass={classes.highlightedText}
                >
                  {` ${word}`}
                </HighlightedText>
              ))
            : null}
        </li>
      );
    },
    [inputValue, classes, textClassName, textSuffixClassName]
  );

  return (
    <Box className={autocompleteClassName}>
      <Autocomplete
        disablePortal
        data-testid="autocomplete-component"
        onChange={(_e: React.SyntheticEvent, newValue: AutocompleteOption | null) => {
          setValue(newValue);
          onChangeAutocomplete(newValue);
        }}
        onClose={() => {
          setInputValue('');
        }}
        classes={{
          option: classes.optionItem,
        }}
        filterOptions={filterOptions}
        value={value}
        options={opts}
        inputValue={inputValue || (value ? `${value?.text || ''}${value?.textSuffix || ''}` : '')}
        onInputChange={(_e: React.SyntheticEvent, newValue: string) => {
          if (_e) setInputValue(newValue);
        }}
        getOptionLabel={displaySelectedOption}
        renderOption={renderOption}
        renderInput={(inputProps) => <TextField {...inputProps} label={label} data-testid="autocomplete-input" />}
      />
    </Box>
  );
}

export default MAutocomplete;
