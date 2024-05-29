import '@testing-library/jest-dom/extend-expect';
import { render, screen } from 'test-utils';
import React from 'react';
import { ToggleGroupProps } from './ToggleGroup';
import { DefaultToggleGroup, CustomToggleGroup, ExclusiveToggleGroup } from './ToggleGroup.stories';

const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
const testToggleButtonLabels = (args: { items: { value: string }[] }, func?: (str: string) => string): void =>
  args.items.forEach((item) => expect(screen.getByText(func ? func(item.value) : item.value)).toBeInTheDocument());

describe('DefaultToggleGroup', () => {
  test('it should render default toggle', () => {
    const args: ToggleGroupProps = DefaultToggleGroup.args as ToggleGroupProps;
    render(<DefaultToggleGroup {...args} />);
    testToggleButtonLabels(args);
  });
});

describe('CustomToggleGroup', () => {
  test('it should render custom toggle', () => {
    const args: ToggleGroupProps = CustomToggleGroup.args as ToggleGroupProps;
    render(<CustomToggleGroup {...args} />);
    testToggleButtonLabels(args, capitalizeFirstLetter);
  });

  test('it should call onChange when changing options', () => {
    const spy = jest.spyOn(console, 'log');
    const args: ToggleGroupProps = CustomToggleGroup.args as ToggleGroupProps;
    const onChangeArg = 'test';
    if (args?.onChange) args.onChange(onChangeArg);
    expect(spy).toBeCalledWith(onChangeArg);
  });
});

describe('ExclusiveToggleGroup', () => {
  test('it should render exclusive toggle', () => {
    const args: ToggleGroupProps = ExclusiveToggleGroup.args as ToggleGroupProps;
    render(<ExclusiveToggleGroup {...args} />);
    testToggleButtonLabels(args, capitalizeFirstLetter);
  });
});
