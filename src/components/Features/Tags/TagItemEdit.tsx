import { Box, IconButton, TextField } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { PlusIcon } from '../../../assets/icons';
import { MTheme } from '../../../theme';
import { Tag } from './TagItem';
import { tagsContainerSize, tagsSize } from './TagsConstants';
import { Popper } from '../../Popper';
import ColorSelector from '../../ColorSelector/ColorSelector';
import { DropdownIcon } from '../../../assets/icons/DropdownIcon';
import { CheckedIcon } from '../../../assets/icons/CheckedIcon';

export interface TagItemEditErrors {
  empty: string;
  duplicate: string;
  maxLength: string;
  maxCount: string;
}

export interface TagItemEditProps {
  name?: string;
  nameList?: string[];
  nameLabel?: string;
  namePlaceholder?: string;
  nameMaxLength?: number;
  color?: string;
  colorList?: string[];
  colorColumns?: number;
  currentCustomCount?: number;
  maxCount?: number;
  errors: TagItemEditErrors;
  onSave: (tag: Tag) => void;
  className?: string;
  colorSelectorClass?: string;
}

interface StyleProps {
  selectedColor: string;
}

const useStyles = makeStyles((theme: MTheme) => ({
  tagEditWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    width: theme.spacing(34),
    paddingLeft: theme.spacing(1),
  },
  colorEdit: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    height: theme.spacing(5),
    cursor: 'pointer',
    paddingRight: theme.spacing(1),
  },
  dot: ({ selectedColor }: StyleProps) => ({
    height: tagsSize(theme),
    width: tagsSize(theme),
    padding: theme.spacing(0.75),
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: selectedColor,
  }),
  dotWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: tagsContainerSize(theme),
    width: tagsContainerSize(theme),
    borderRadius: theme.spacing(1),
  },
  dotWrapperHover: {
    backgroundColor: theme.palette.grey[1600],
  },
  dotWrapperActive: {
    backgroundColor: theme.palette.blue[100],
  },
  colorSelector: {
    backgroundColor: theme.palette.grey[0],
    padding: 0,
    transform: `translate(${theme.spacing(3)}, ${theme.spacing(-2)})`,
  },
  nameTextField: {
    marginTop: theme.spacing(0.25),
  },
  saveTagButton: {
    marginLeft: theme.spacing(0.5),
  },
}));

function TagItemEdit({
  name: updatedName,
  color: updatedColor,
  nameList = [],
  colorList = [],
  colorColumns = 5,
  currentCustomCount = 0,
  nameLabel = '',
  namePlaceholder = '',
  nameMaxLength = 20,
  maxCount = 20,
  errors,
  onSave,
  className,
  colorSelectorClass,
}: TagItemEditProps): JSX.Element {
  const [name, setName] = useState('');
  const [color, setColor] = useState(colorList[0] || '');
  const theme: MTheme = useTheme();
  const classes = useStyles({ selectedColor: color });
  const [errorText, setErrorText] = useState('');
  const [colorEditHover, setColorEditHover] = useState(false);
  const [activeColorSelector, setActiveColorSelector] = useState(false);
  const colorSelectorPopperAnchor = useRef(null);
  const isEditing = updatedName || updatedColor;

  useEffect(() => {
    if (updatedName) {
      setName(updatedName);
    }
  }, [updatedName]);

  useEffect(() => {
    if (updatedColor) {
      setColor(updatedColor);
    }
  }, [updatedColor]);

  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setName(evt.target.value);
  };

  const onNameBlur = (evt: React.FocusEvent<HTMLInputElement>): void => {
    setName(evt.target.value.trim());
  };

  const onColorSelected = (selectedColor: string): void => {
    setColor(selectedColor);
    setActiveColorSelector(false);
  };

  const getValidationError = (): string | null => {
    if (name === updatedName) {
      return null;
    }
    if (name.length === 0) {
      return errors.empty;
    }
    // allow change of capitalization
    if (name.toLowerCase() === updatedName?.toLowerCase()) {
      return null;
    }
    if (nameList.map((_name) => _name.toLowerCase()).includes(name.toLowerCase())) {
      return errors.duplicate;
    }
    if (name.length > nameMaxLength) {
      return errors.maxLength;
    }
    if (!isEditing && currentCustomCount >= maxCount) {
      return errors.maxCount;
    }
    return null;
  };

  const onClick = (): void => {
    const error = getValidationError();
    if (error) {
      setErrorText(error);
    } else {
      onSave({ name, color });
      setName('');
    }
  };

  return (
    <Box className={clsx(classes.tagEditWrapper, className)} data-testid="edit-tag-wrapper">
      <Box
        data-testid="tag-edit-color"
        className={classes.colorEdit}
        onClick={() => setActiveColorSelector(!activeColorSelector)}
        onMouseEnter={() => setColorEditHover(true)}
        onMouseLeave={() => setColorEditHover(false)}
        ref={colorSelectorPopperAnchor}
      >
        <Box
          className={clsx(
            classes.dotWrapper,
            activeColorSelector && classes.dotWrapperActive,
            !activeColorSelector && colorEditHover && classes.dotWrapperHover
          )}
          data-testid="tag-edit-dot-wrapper"
        >
          <Box className={classes.dot} data-testid="tag-edit-dot" />
        </Box>
        <DropdownIcon />
      </Box>
      <Popper
        placement="bottom"
        isPopperOpen={activeColorSelector}
        arrow={false}
        popperAnchor={colorSelectorPopperAnchor.current}
        popperContentClassName={colorSelectorClass || classes.colorSelector}
        disablePortal={false}
      >
        <ColorSelector colors={colorList} columns={colorColumns} onSelected={onColorSelected} />
      </Popper>
      <TextField
        className={classes.nameTextField}
        fullWidth
        size="small"
        variant="outlined"
        value={name}
        label={nameLabel}
        placeholder={namePlaceholder}
        error={!!errorText}
        helperText={errorText}
        onChange={onNameChange}
        onBlur={onNameBlur}
        inputProps={{
          style: {
            fontSize: theme.spacing(1.75),
            height: theme.spacing(3),
            padding: `${theme.spacing(0.5)} ${theme.spacing(1.75)}`,
          },
          'data-testid': 'tag-edit-input',
        }}
        InputLabelProps={{
          style: {
            fontSize: theme.spacing(1.75),
            lineHeight: 'initial',
          },
        }}
      />
      <IconButton className={classes.saveTagButton} size="medium" onClick={onClick} data-testid="save-tag-button">
        {isEditing ? <CheckedIcon /> : <PlusIcon />}
      </IconButton>
    </Box>
  );
}

export default TagItemEdit;
