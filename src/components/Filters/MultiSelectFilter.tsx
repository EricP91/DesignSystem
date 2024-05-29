import { Alert, Box, Checkbox, FormControlLabel, FormGroup, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { isEqual } from 'lodash';
import * as React from 'react';
import { forwardRef, ReactElement, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { MTheme } from '../../theme';
import { FilterButton, MButton } from '../index';
import TextAndAvatar from '../Text/TextAndAvatar';
import ClearAllButton from './ClearAllButton';
import { TooltipTriggerBreakpointProp } from './FilterButton';
import SearchInput from './SearchInput';
import { searchItemsByQuery } from './utils';

const useStyles = makeStyles((theme: MTheme) => ({
  footer: {
    marginTop: theme.spacing(4),
    marginLeft: 'auto',
  },
  primaryButton: {
    marginLeft: theme.spacing(1),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 144,
    overflow: 'auto',
    '& .Mui-disabled $labelTotalCounter': {
      color: 'inherit',
    },
  },
  formGroup: {
    width: 228,
    margin: theme.spacing(1, 1, 1, 0),
  },
  label: {
    width: 165,
    display: 'flex',
    alignItems: 'center',
  },
  labelTextWrapper: {
    flex: 1,
    width: 165,
    overflow: 'hidden',
    marginRight: 4,
  },
  labelText: {
    fontWeight: 500,
  },
  labelCounter: {
    marginLeft: 'auto',
    fontWeight: 500,
    flex: 0,
  },
  labelTotalCounter: {
    color: theme.palette.grey[600],
    fontSize: theme.spacing(1.5),
  },
  clearAllBtn: {
    margin: theme.spacing(0, 0, 1, -1),
  },
  searchContainer: {
    width: '100%',
    paddingLeft: theme.spacing(2),
  },
  alertMessage: {
    margin: theme.spacing(1.875, 0, -2, 0),
  },
  stickyHeaderContainerDefault: {
    marginBottom: theme.spacing(1),
  },
  tooltip: {
    marginBottom: `${theme.spacing(1)} !important`,
  },
  tooltipText: {
    fontSize: theme.spacing(1.75),
    fontWeight: 400,
    lineHeight: theme.spacing(3),
  },
}));

export type TooltipBreakpointPropValue = boolean | null | undefined;

export interface MultiSelectFilterItem {
  id: string;
  value: string;
  selected?: boolean;
  count?: number;
  totalCount?: number;
  renderer?: ReactElement;
  icon?: ReactElement;
}

export interface MultiSelectFilterState {
  [key: string]: boolean;
}

export interface AlertMessage {
  severity: 'success' | 'info' | 'warning' | 'error';
  text: string;
}
export interface MultiSelectFilterProps {
  items: MultiSelectFilterItem[];
  filterName: string;
  filterModel: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  clearAllButtonText?: string;
  selectedText?: string;
  onApply?: (state: MultiSelectFilterState) => void;
  dataTestId?: string;
  tooltipTriggerBreakpoint?: TooltipTriggerBreakpointProp;
  searchPlaceholder?: string;
  resultsText?: string;
  noResultsText?: string;
  alertMessage?: AlertMessage;
  filterContentClassName?: string;
  stickyHeader?: React.ReactNode;
  stickyHeaderContainerClassName?: string;
}

const MultiSelectFilter = forwardRef(
  (
    {
      items,
      filterName,
      filterModel,
      primaryButtonText = 'Apply',
      secondaryButtonText = 'Cancel',
      clearAllButtonText = 'Clear all',
      selectedText = 'Selected',
      onApply = () => {},
      dataTestId = 'multiselect-filter',
      tooltipTriggerBreakpoint = 250,
      searchPlaceholder = 'Search...',
      resultsText = 'results',
      noResultsText = 'No results',
      alertMessage,
      filterContentClassName = '',
      stickyHeader = null,
      stickyHeaderContainerClassName = '',
    }: MultiSelectFilterProps,
    ref
  ) => {
    const classes = useStyles();
    const filterButtonRef = useRef<HTMLButtonElement & { handleClose: () => void }>();
    const filterNameTestId = filterName.toLowerCase().split(' ').join('-');
    const filterDataTestId = `checkbox-form-control-${filterNameTestId}`;
    const buildItemsState = (setItemState: (item: MultiSelectFilterItem) => boolean = (item) => !!item.selected) =>
      items.reduce<MultiSelectFilterState>((acc, item) => ({ ...acc, [item.id]: setItemState(item) }), {});

    const getStateSelectedKeys = (itemsState: MultiSelectFilterState): string[] =>
      Object.keys(itemsState).filter((key) => itemsState[key]);

    const initialState = buildItemsState((item) => item.selected ?? false);
    const [state, setState] = React.useState(initialState);
    const [isEqualToOpenState, setIsEqualToOpenState] = React.useState(true);
    const [previouslyAppliedState, setPreviouslyAppliedState] = useState(state);
    const [selectedFilterText, setSelectedFilterText] = useState('');
    const disabled = items.length === 0;
    const selectedKeys = getStateSelectedKeys(state);
    const isAtLeastOneItemSelected = selectedKeys.length > 0;
    const [isActiveFilter, setIsActiveFilter] = useState(isAtLeastOneItemSelected);
    const [isVisible, setIsVisible] = useState(isAtLeastOneItemSelected);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(items);

    useEffect(() => {
      setIsEqualToOpenState(isEqual(initialState, state));
    }, [initialState, state]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const initSearchResults = (): void => {
      setSearchQuery('');
      setSearchResults(items);
    };

    const onCancel = (): void => {
      setState(previouslyAppliedState);
      filterButtonRef?.current?.handleClose();
      initSearchResults();
    };

    const clearFilter = (): void => {
      setIsActiveFilter(false);
      const clearedState = buildItemsState(() => false);
      setState(clearedState);
      setPreviouslyAppliedState(clearedState);
      onApply(clearedState);
    };

    useImperativeHandle(ref, () => ({
      clearFilter,
    }));

    useEffect(() => {
      if (items) {
        setPreviouslyAppliedState(state);

        const changedState = buildItemsState();
        const selectedKeys = getStateSelectedKeys(changedState);
        const isAtLeastOneItemSelected = selectedKeys.length > 0;
        setIsActiveFilter(isAtLeastOneItemSelected);
        setState(changedState);

        setSearchResults(items);
      }
    }, [items]);

    useEffect(() => {
      if (isVisible) {
        setSelectedFilterText(`(${selectedKeys.length}/${items.length})`);
      } else {
        setSelectedFilterTextWhenClosed();
      }
    }, [isVisible, selectedKeys]);

    const onApplyClick = (): void => {
      setPreviouslyAppliedState(state);
      onApply(state);

      setIsActiveFilter(isAtLeastOneItemSelected);
      filterButtonRef?.current?.handleClose();
    };

    const setSelectedFilterTextWhenClosed = (): void => {
      if (selectedKeys.length === 0) {
        setSelectedFilterText('');
        return;
      }
      if (selectedKeys.length === 1) {
        const selectedItem = items.find((item) => selectedKeys.find((key) => key === item.id));
        const value = selectedItem ? selectedItem.value : '';
        setSelectedFilterText(value);
        return;
      }
      setSelectedFilterText(`${selectedKeys.length} ${selectedText}`);
    };

    const clearAll = (): void => {
      const clearedState = buildItemsState(() => false);
      setState(clearedState);
    };

    const onFilterOpen = (): void => {
      setIsVisible(true);
    };

    const onFilterClosed = (): void => {
      setIsVisible(false);
      initSearchResults();
    };

    const onSearchChange = (searchQuery: string): void => {
      setSearchResults(searchQuery ? searchItemsByQuery(items, searchQuery) : items);
    };

    const onChangeSearchQuery = (evt: React.ChangeEvent<HTMLInputElement>): void => {
      const currentSearchQuery = evt.target.value;
      setSearchQuery(currentSearchQuery);
      onSearchChange(currentSearchQuery);
    };

    return (
      <Tooltip
        arrow
        placement="top"
        classes={{ tooltip: classes.tooltip }}
        title={
          disabled ? (
            <Typography variant="text" data-testid="results-count-tooltip">
              {items.length} {resultsText}
            </Typography>
          ) : (
            ''
          )
        }
      >
        <span>
          <FilterButton
            disabled={disabled}
            onFilterOpen={onFilterOpen}
            onFilterClosed={onFilterClosed}
            onBackdropClick={onCancel}
            ref={filterButtonRef}
            filterName={filterName}
            filterNameSuffix={selectedFilterText ? ':' : ''}
            isActive={isActiveFilter}
            selectedFilterText={selectedFilterText}
            tooltipTriggerBreakpoint={tooltipTriggerBreakpoint}
          >
            <FormGroup ref={ref} data-testid={dataTestId} className={clsx(classes.formGroup, filterContentClassName)}>
              {stickyHeader && (
                <Box className={clsx(classes.stickyHeaderContainerDefault, stickyHeaderContainerClassName)}>
                  {stickyHeader}
                </Box>
              )}
              <Box mb={2.5}>
                <SearchInput
                  placeholder={searchPlaceholder}
                  searchQuery={searchQuery}
                  onChangeSearchQuery={onChangeSearchQuery}
                />
              </Box>
              <Box className={classes.clearAllBtn}>
                <ClearAllButton
                  data-testid="clear-button"
                  disabled={!isAtLeastOneItemSelected}
                  onClearAll={clearAll}
                  clearAllButtonText={clearAllButtonText}
                />
              </Box>
              {searchResults.length ? (
                <Box className={classes.list}>
                  {searchResults.map((item, index) => (
                    <FormControlLabel
                      disabled={item.count === 0}
                      data-testid="form-control-label"
                      key={item.id || `item-${index}`}
                      control={
                        <Checkbox
                          checked={state[item.id] ?? false}
                          onChange={handleChange}
                          name={item.id}
                          data-testid={filterDataTestId}
                        />
                      }
                      label={
                        <Box className={classes.label}>
                          <Box className={classes.labelTextWrapper}>
                            <TextAndAvatar
                              value={item.value}
                              renderer={item.renderer}
                              highlight={searchQuery}
                              icon={item.icon}
                              data-testid="list-items"
                            />
                          </Box>
                          {item.count !== undefined && (
                            <Typography
                              component="span"
                              display="inline"
                              className={classes.labelCounter}
                              variant="body2"
                              data-testid="count-selected-items"
                            >
                              {item.count}
                              {item.totalCount !== undefined && item.totalCount !== item.count && (
                                <span className={classes.labelTotalCounter}>/{item.totalCount}</span>
                              )}
                            </Typography>
                          )}
                        </Box>
                      }
                    />
                  ))}
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" justifyContent="center" data-testid="search-list-no-results">
                  <Typography align="center" variant="body1">
                    {noResultsText}
                  </Typography>
                </Box>
              )}
              {alertMessage && (
                <Alert className={classes.alertMessage} severity={alertMessage?.severity}>
                  {alertMessage?.text}
                </Alert>
              )}
              <Box className={classes.footer}>
                <MButton
                  size="small"
                  onClick={() => onCancel()}
                  color="primary"
                  variant="outlined"
                  data-testid={`${filterModel}-${filterNameTestId}-cancel-button`}
                >
                  {secondaryButtonText}
                </MButton>
                <MButton
                  size="small"
                  disabled={isEqualToOpenState}
                  className={classes.primaryButton}
                  onClick={() => onApplyClick()}
                  color="primary"
                  variant="contained"
                  data-testid={`${filterModel}-${filterNameTestId}-apply-button`}
                >
                  {primaryButtonText}
                </MButton>
              </Box>
            </FormGroup>
          </FilterButton>
        </span>
      </Tooltip>
    );
  }
);

export default MultiSelectFilter;
