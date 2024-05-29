import { act, fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { Default, Update } from './TagItemEdit.stories';
import { TagItemEditErrors, TagItemEditProps } from './TagItemEdit';

describe('TagItemEdit', () => {
  const onSave = jest.fn();

  const typeOnInputAndClickSave = (value: string): void => {
    act(() => {
      fireEvent.change(screen.getByTestId('tag-edit-input'), { target: { value } });
    });
    act(() => {
      fireEvent.click(screen.getByTestId('save-tag-button'));
    });
  };

  const openColorSelectorAndClickColor = (color: string): void => {
    act(() => {
      fireEvent.click(screen.getByTestId('tag-edit-color'));
    });
    act(() => {
      fireEvent.click(screen.getByTestId(`color-selector-${color}`));
    });
  };

  beforeEach(() => {
    onSave.mockClear();
  });

  it('should render tag item edit with default props', () => {
    render(<Default errors={Default.args?.errors as TagItemEditErrors} onSave={onSave} />);
    expect(screen.getByTestId('tag-edit-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-edit-color')).toBeInTheDocument();
  });

  it('should render tag item edit with props', () => {
    render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
    expect(screen.getByTestId('tag-edit-input')).toBeInTheDocument();
  });

  it('should render tag item edit with props to update', () => {
    render(<Update {...(Update.args as TagItemEditProps)} />);
    expect(screen.getByTestId('tag-edit-input')).toHaveDisplayValue(`${Update.args?.name}`);
  });

  it('should call back the saved tag when typing on input and clicking save', () => {
    render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
    typeOnInputAndClickSave('Test');
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ name: 'Test' }));
  });

  it('should call back the saved tag when changing case on input and clicking save', () => {
    render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
    typeOnInputAndClickSave('Tag Name');
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ name: 'Tag Name' }));
  });

  it('should open color selector and click a color then tag edit should be updated with that color', () => {
    render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
    const color = Default.args?.colorList ? Default.args?.colorList[3] : '#000';
    openColorSelectorAndClickColor(color);
    expect(screen.getByTestId('tag-edit-dot')).toHaveStyle(`background-color: ${color}`);
  });

  it('should display the expected color when hovering the color edit element', () => {
    render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('tag-edit-color'));
    });
    expect(screen.getByTestId('tag-edit-dot-wrapper')).toHaveStyle('background-color: #E7ECF1');
    act(() => {
      fireEvent.mouseLeave(screen.getByTestId('tag-edit-color'));
    });
    expect(screen.getByTestId('tag-edit-dot-wrapper')).not.toHaveStyle('background-color: #E7ECF1');
  });

  describe('ValidateErrors', () => {
    const checkValidationErrorForInput = (value: string, errorText: string): void => {
      typeOnInputAndClickSave(value);
      expect(screen.getByTestId('edit-tag-wrapper')).toHaveTextContent(errorText);
      expect(onSave).not.toHaveBeenCalled();
    };

    it('should display error and not save tag when empty error', () => {
      render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
      checkValidationErrorForInput('', `${Update.args?.errors?.empty}`);
    });

    it('should display error and not save tag when duplicate error', () => {
      render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
      checkValidationErrorForInput(`${Update.args?.nameList?.[0]}`, `${Update.args?.errors?.duplicate}`);
    });

    it('should display error and not save tag when max length error', () => {
      render(<Default {...(Default.args as TagItemEditProps)} onSave={onSave} />);
      checkValidationErrorForInput('Evidence_Test', `${Update.args?.errors?.maxLength}`);
    });

    it('should display error and not save tag when max count error', () => {
      render(
        <Default
          {...(Default.args as TagItemEditProps)}
          currentCustomCount={Default.args?.maxCount || 0}
          onSave={onSave}
        />
      );
      checkValidationErrorForInput('Test', `${Update.args?.errors?.maxCount}`);
    });
  });
});
