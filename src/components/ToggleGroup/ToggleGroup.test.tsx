/* eslint-disable no-console */
import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import ToggleGroup from './ToggleGroup';

const defaultItems = [
  { id: 'image', value: 'image' },
  { id: 'video', value: 'video' },
];
const [{ value: image }, { value: video }] = defaultItems;
const itemsWithAllOption = [{ id: 'all', value: 'all' }, ...defaultItems];
const [{ value: all }] = itemsWithAllOption;

describe('ToggleGroup', () => {
  const consoleLogSpy = jest.spyOn(console, 'log');

  beforeEach(() => {
    consoleLogSpy.mockClear();
  });

  describe('toggle with single selection', () => {
    test('it should have single selection', () => {
      render(<ToggleGroup exclusive items={defaultItems} onChange={console.log} />);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(consoleLogSpy).toBeCalledWith(image);
      fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
      expect(consoleLogSpy).toBeCalledWith(video);
    });

    test('it should have default value', () => {
      const items = [
        { id: 'image', value: 'image', selected: true },
        { id: 'video', value: 'video' },
      ];
      render(<ToggleGroup exclusive items={items} />);
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
    });

    test('it should be possible to unselect', () => {
      render(<ToggleGroup exclusive items={defaultItems} onChange={console.log} />);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(consoleLogSpy).toBeCalledWith(image);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(consoleLogSpy).toBeCalledWith(null);
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: transparent');
    });

    test('it should render disabled option', () => {
      const items = [
        { id: 'image', value: 'image', disabled: true },
        { id: 'video', value: 'video' },
      ];
      render(<ToggleGroup exclusive items={items} onChange={console.log} />);
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('color: rgba(142, 158, 174, 0.8)');
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(consoleLogSpy).not.toBeCalled();
    });
  });

  describe('multiple selection', () => {
    test('it should have multiple selection', () => {
      render(<ToggleGroup items={defaultItems} onChange={console.log} />);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(consoleLogSpy).toBeCalledWith([image]);
      fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
      expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(consoleLogSpy).toBeCalledWith([image, video]);
    });

    test('it should have default value', () => {
      const items = [
        { id: 'image', value: 'image', selected: true },
        { id: 'video', value: 'video' },
      ];
      render(<ToggleGroup items={items} />);
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
    });

    test('it should be possible to unselect', () => {
      render(<ToggleGroup items={defaultItems} onChange={console.log} />);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(consoleLogSpy).toBeCalledWith([image]);
      fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
      expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      expect(consoleLogSpy).toBeCalledWith([image, video]);
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: transparent');
      expect(consoleLogSpy).toBeCalledWith([video]);
      fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
      expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
      expect(consoleLogSpy).toBeCalledWith([]);
    });

    test('it should render disabled option', () => {
      const items = [
        { id: 'image', value: 'image', disabled: true },
        { id: 'video', value: 'video' },
      ];
      render(<ToggleGroup items={items} onChange={console.log} />);
      expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('color: rgba(142, 158, 174, 0.8)');
      fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
      expect(consoleLogSpy).not.toBeCalled();
    });

    describe('toggle with multiple selection and ALL option', () => {
      test('it should have default value', () => {
        const items = [
          { id: 'all', value: 'all', selected: true },
          { id: 'image', value: 'image' },
          { id: 'video', value: 'video' },
        ];
        render(<ToggleGroup items={items} allOption="all" />);
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: transparent');
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
      });

      test('it should unselect ALL when selecting other option', () => {
        const items = [
          { id: 'all', value: 'all' },
          { id: 'image', value: 'image' },
          { id: 'video', value: 'video' },
        ];
        render(<ToggleGroup items={items} onChange={console.log} allOption="all" />);
        fireEvent.click(screen.getByTestId(`toggle-button-${all}`));
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([all]);
        fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
        expect(consoleLogSpy).toBeCalledWith([image]);
        fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
        expect(consoleLogSpy).toBeCalledWith([image, video]);
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: transparent');
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
      });

      test('it should unselect other selected options when selecting ALL', () => {
        render(<ToggleGroup items={itemsWithAllOption} onChange={console.log} allOption="all" />);
        fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([image]);
        fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([image, video]);
        fireEvent.click(screen.getByTestId(`toggle-button-${all}`));
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: transparent');
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
        expect(consoleLogSpy).toBeCalledWith([all]);
      });

      test('it should select ALL when no other option is selected', () => {
        render(<ToggleGroup items={itemsWithAllOption} onChange={console.log} allOption="all" />);
        fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([image]);
        fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([image, video]);
        fireEvent.click(screen.getByTestId(`toggle-button-${image}`));
        expect(screen.getByTestId(`toggle-button-${image}`)).toHaveStyle('background-color: transparent');
        expect(consoleLogSpy).toBeCalledWith([video]);
        fireEvent.click(screen.getByTestId(`toggle-button-${video}`));
        expect(screen.getByTestId(`toggle-button-${video}`)).toHaveStyle('background-color: transparent');
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).toBeCalledWith([all]);
      });

      test('it should not be possible to unselect ALL option', () => {
        const items = [
          { id: 'all', value: 'all', selected: true },
          { id: 'image', value: 'image' },
          { id: 'video', value: 'video' },
        ];
        render(<ToggleGroup items={items} onChange={console.log} allOption="all" />);
        fireEvent.click(screen.getByTestId(`toggle-button-${all}`));
        expect(screen.getByTestId(`toggle-button-${all}`)).toHaveStyle('background-color: rgba(0, 100, 204, 0.12)');
        expect(consoleLogSpy).not.toBeCalled();
      });
    });
  });
});
