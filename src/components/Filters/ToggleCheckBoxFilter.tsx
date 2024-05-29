import { Box, FormControlLabel, Checkbox, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import * as React from 'react';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { MTheme } from '../../theme';
import { FilterButton, MButton } from '../index';

const useStyles = makeStyles((theme: MTheme) => ({
  root: {
    minWidth: 252,
    padding: theme.spacing(0, 1, 1, 0),
  },
  formCheckBox: {
    display: 'table',
    marginLeft: theme.spacing(0.125),
    marginBottom: theme.spacing(1.5),
  },
  formCheckBoxControl: {
    display: 'table-cell',
  },
  formCheckBoxLabel: {
    maxWidth: 248,
    minHeight: 50,

    '& .MuiTypography-root': {
      wordWrap: 'break-word',
    },
  },
  footer: {
    '& .MuiButton-root': {
      marginLeft: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  primaryButton: {
    marginLeft: theme.spacing(1),
  },
  tooltip: {
    marginBottom: `${theme.spacing(1)} !important`,
  },
  formControlDisabled: {
    pointerEvents: 'none',
    cursor: 'default',
  },
  checkBoxDescriptionDisabled: {
    color: theme.palette.grey[500],
  },
}));

export interface ToggleCheckBoxFilterProps {
  filterName: string;
  filterNameSuffix?: string;
  filterModel: string;
  checkBoxDescription?: string;
  checked?: boolean;
  selectedFilterText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onApply: (isChecked: boolean) => void;
  disabled?: boolean;
  content?: React.ReactNode;
  formCheckBoxDisabled?: boolean;
  formCheckBoxClassName?: string;
  formCheckBoxLabelClassName?: string;
  tooltipClassName?: string;
  tooltipTitle?: string | React.ReactNode;
}

const ToggleCheckBoxFilter = forwardRef(
  (
    {
      filterName,
      filterNameSuffix,
      filterModel,
      checkBoxDescription = '',
      checked = false,
      selectedFilterText = '',
      primaryButtonText = 'Apply',
      secondaryButtonText = 'Cancel',
      onApply,
      disabled = false,
      content = null,
      formCheckBoxDisabled = false,
      formCheckBoxClassName = '',
      formCheckBoxLabelClassName = '',
      tooltipClassName = '',
      tooltipTitle,
    }: ToggleCheckBoxFilterProps,
    ref
  ) => {
    const classes = useStyles();
    const filterNameTestId = filterName.toLowerCase().split(' ').join('-');
    const filterButtonRef = useRef<HTMLButtonElement & { handleClose: () => void }>();
    const [isTouched, setIsTouched] = useState(false);
    const [isChecked, setIsChecked] = React.useState(checked);
    const [previouslyAppliedState, setPreviouslyAppliedState] = useState(isChecked);
    const [isActiveFilter, setIsActiveFilter] = useState(checked);

    useEffect(() => {
      setIsActiveFilter(checked);
      setIsChecked(checked);
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setIsTouched(true);
      setIsChecked(event.target.checked);
    };

    const onCancel = (): void => {
      setIsTouched(false);
      setIsChecked(previouslyAppliedState);
      filterButtonRef?.current?.handleClose();
    };

    const clearFilter = (): void => {
      setIsActiveFilter(false);
      setIsChecked(false);
      setPreviouslyAppliedState(false);
      onApply(false);
    };

    useImperativeHandle(ref, () => ({
      clearFilter,
    }));

    const onApplyClick = (): void => {
      setIsTouched(false);
      setPreviouslyAppliedState(isChecked);
      onApply(isChecked);
      setIsActiveFilter(isChecked);
      filterButtonRef?.current?.handleClose();
    };

    return (
      <Tooltip
        arrow
        placement="top"
        classes={{ tooltip: clsx(classes.tooltip, tooltipClassName) }}
        title={disabled ? tooltipTitle ?? '' : ''}
        data-testid="toggle-filter-tooltip"
      >
        <span>
          <FilterButton
            disabled={disabled}
            onBackdropClick={onCancel}
            ref={filterButtonRef}
            filterName={`${filterName + (filterNameSuffix || '')}`}
            selectedFilterText={selectedFilterText}
            filterNameSuffix=""
            isActive={isActiveFilter}
            onFilterOpen={() => setPreviouslyAppliedState(checked)}
          >
            <Box ref={ref} className={classes.root} data-testid="toggle-filter">
              <FormControlLabel
                control={
                  <div className={clsx(classes.formCheckBoxControl, formCheckBoxClassName)}>
                    <Checkbox
                      size="small"
                      checked={isChecked}
                      onChange={handleChange}
                      data-testid="checkbox-form-control"
                      disabled={formCheckBoxDisabled}
                      disableRipple
                    />
                  </div>
                }
                label={
                  <Box className={clsx(classes.formCheckBoxLabel, formCheckBoxLabelClassName)}>
                    <Typography
                      display="inline"
                      variant="body2"
                      data-testid="checkbox-description"
                      className={clsx(formCheckBoxDisabled && classes.checkBoxDescriptionDisabled)}
                    >
                      {checkBoxDescription}
                    </Typography>
                  </Box>
                }
                className={clsx(classes.formCheckBox, formCheckBoxDisabled && classes.formControlDisabled)}
              />
              {content}
              <Box className={classes.footer}>
                <MButton
                  size="small"
                  disabled={!isTouched}
                  className={classes.primaryButton}
                  onClick={() => onApplyClick()}
                  color="primary"
                  variant="contained"
                  data-testid={`${filterModel}-${filterNameTestId}-apply-button`}
                >
                  {primaryButtonText}
                </MButton>
                <MButton
                  size="small"
                  onClick={() => onCancel()}
                  color="primary"
                  variant="outlined"
                  data-testid={`${filterModel}-${filterNameTestId}-cancel-button`}
                >
                  {secondaryButtonText}
                </MButton>
              </Box>
            </Box>
          </FilterButton>
        </span>
      </Tooltip>
    );
  }
);

export default ToggleCheckBoxFilter;
