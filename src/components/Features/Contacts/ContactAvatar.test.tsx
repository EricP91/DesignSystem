import { render, screen } from 'test-utils';
import React from 'react';
import { getRandomColorStyle, getColorRandomizeSeed } from './ContactAvatar';
import {
  AvatarIdentifierEmail,
  AvatarIdentifierAndName,
  AvatarIdentifierPhone,
  AvatarImage,
  AvatarName,
  AvatarNoImage,
  UnidentifiedAvatar,
} from './ContactAvatar.stories';

describe('ContactAvatar', () => {
  test('should render default person avatar', () => {
    render(<AvatarNoImage />);
    expect(screen.getAllByTestId('PersonIcon')).toBeTruthy();
  });

  test('should apply a random color on avatar based on id when no image', () => {
    render(<AvatarNoImage {...AvatarNoImage.args} />);
    expect(screen.getByTestId('default-avatar')).toHaveStyle(getRandomColorStyle(AvatarNoImage?.args?.id));
  });

  test('should render avatar with image', () => {
    render(<AvatarImage {...AvatarImage.args} />);
    expect(screen.getAllByTestId('image-avatar')).toBeTruthy();
  });

  test('should render avatar with name initials', () => {
    render(<AvatarName {...AvatarName.args} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  test('should display identifier text in avatar when identifier is email', () => {
    render(<AvatarIdentifierEmail {...AvatarIdentifierEmail.args} />);
    expect(screen.getByText('MG')).toBeInTheDocument();
  });

  test('should display identifier text in avatar when identifier is phone number', () => {
    render(<AvatarIdentifierPhone {...AvatarIdentifierPhone.args} />);
    expect(screen.getByText('97')).toBeInTheDocument();
  });

  test('should not render avatar with name initials when it is unidentified', () => {
    render(<AvatarName {...UnidentifiedAvatar.args} />);
    expect(screen.queryByText('UN')).toBeNull();
  });

  test('should not display identifier text in avatar it is unidentified', () => {
    render(<AvatarIdentifierEmail {...UnidentifiedAvatar.args} />);
    expect(screen.queryByText('NO')).toBeNull();
  });

  test('should apply a random color on avatar based on name when no image', () => {
    render(<AvatarName {...AvatarName.args} />);
    expect(screen.getByTestId('name-avatar')).toHaveStyle(getRandomColorStyle(AvatarName?.args?.name));
  });

  test('should apply a random color on avatar based on name and identifier when no image', () => {
    const { name, identifier, id } = AvatarIdentifierAndName.args;
    const randomizeSeed = getColorRandomizeSeed(name, identifier, id);
    render(<AvatarIdentifierAndName {...AvatarIdentifierAndName.args} />);
    expect(screen.getByTestId('name-avatar')).toHaveStyle(getRandomColorStyle(randomizeSeed));
  });
});
