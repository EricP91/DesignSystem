import { fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { AvatarGroup } from './ContactAvatarGroup.stories';
import { ContactAvatarGroupProps } from './ContactAvatarGroup';

describe('ContactAvatarGroup', () => {
  test('should render contact avatar group', () => {
    render(<AvatarGroup {...(AvatarGroup.args as ContactAvatarGroupProps)} />);
  });

  test('should highlight text in tooltip', () => {
    render(<AvatarGroup {...(AvatarGroup.args as ContactAvatarGroupProps)} />);

    const [firstAvatar] = screen.queryAllByTestId('image-avatar');
    fireEvent.mouseOver(firstAvatar);

    const highlightedText = screen.queryAllByText(/john/);
    highlightedText.forEach((text) => {
      expect(text).toHaveStyle('background-color: #FFE16A');
      expect(text).toHaveStyle('color: #1E2C3F');
    });
  });

  it('should call console.log when calling onClickViewMore', () => {
    const spy = jest.spyOn(console, 'log');
    if (AvatarGroup?.args?.onClickViewMore) AvatarGroup.args.onClickViewMore();
    expect(spy).toBeCalledWith('View more');
  });
});
