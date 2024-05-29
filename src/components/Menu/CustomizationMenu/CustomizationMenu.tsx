import React, { ReactElement, useState } from 'react';
import { Box, Divider, FormControlLabel, Stack, Typography, styled } from '@mui/material';
import MenuButton, { MenuButtonProps } from '../MenuButton';
import MCheckbox from '../../Checkbox/MCheckbox';

export interface CustomizationMenuProps extends Omit<MenuButtonProps, 'children'> {
  selectAllLabel?: string;
  titleLabel?: string;
  items: Item[];
  initialSelection?: { [key: string]: boolean } | Record<string, never>;
  onSelectionChange?: (selections: Record<string, boolean>) => void;
}

export interface Item {
  id: string;
  value: string | ReactElement;
}

const StackStyled = styled(Stack)(() => ({
  overflow: 'auto',
  height: 256,
}));

const FormControlLabelStyled = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiTypography-root': {
    ...theme.typography.text,
    color: theme.palette.ui.brandDark,
  },
  '& .MuiCheckbox-root': {
    padding: theme.spacing(0.5, 1, 0.5, 0),
  },
  padding: theme.spacing(0.5, 1),
}));

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  borderColor: theme.palette.ui.mutedLight,
}));

const HeaderStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  color: theme.palette.ui.mutedDark,
}));

const CustomizationMenu = ({
  selectAllLabel = 'Select All',
  items,
  titleLabel,
  onSelectionChange = () => {},
  initialSelection = {},
  ...rest
}: CustomizationMenuProps): JSX.Element => {
  const [itemSelectionLookup, setItemSelectionLookup] = useState({
    ...items.reduce<Record<string, boolean>>((acc, { id }) => ({ ...acc, [id]: false }), {}),
    ...initialSelection,
  });
  const itemSelectionAllIds = Object.keys(itemSelectionLookup);
  const isAllSelected = itemSelectionAllIds.every((x) => itemSelectionLookup[x]);
  const isSomeSelected = itemSelectionAllIds.some((x) => itemSelectionLookup[x]);
  const indeterminate = isSomeSelected && !isAllSelected;

  const handleChange = (event: React.SyntheticEvent, checked: boolean): void => {
    const target = event.target as HTMLInputElement;
    const itemsState = { ...itemSelectionLookup, [target.name]: checked };
    setItemSelectionLookup(itemsState);
    onSelectionChange(itemsState);
  };

  const selectAll = (event: React.SyntheticEvent, checked: boolean): void => {
    const itemsState = Object.keys(itemSelectionLookup).reduce(
      (acc: Record<string, boolean>, key) => ({ ...acc, [key]: checked }),
      {}
    );
    setItemSelectionLookup(itemsState);
    onSelectionChange(itemsState);
  };

  return (
    <MenuButton menuProps={{ PaperProps: { style: { minWidth: 256 } } }} {...rest}>
      <HeaderStyled>
        <Typography variant="smallMedium">{titleLabel || rest.buttonText}</Typography>
      </HeaderStyled>
      <FormControlLabelStyled
        onChange={selectAll}
        control={<MCheckbox indeterminate={indeterminate} checked={isAllSelected} />}
        label={selectAllLabel}
      />
      <DividerStyled />
      <StackStyled>
        {items.map(({ id, value }) => (
          <FormControlLabelStyled
            checked={itemSelectionLookup[id]}
            name={id}
            key={id}
            onChange={handleChange}
            control={<MCheckbox />}
            label={value}
          />
        ))}
      </StackStyled>
    </MenuButton>
  );
};

export default CustomizationMenu;
