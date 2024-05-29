import { act, fireEvent, render, screen } from 'test-utils';
import React from 'react';
import { IconAvatarBadgeTooltipProps } from './IconAvatarBadgeTooltip';
import { Default as IconAvatarBadgeTooltipDefault } from './IconAvatarBadgeTooltip.stories';

describe('IconAvatarBadgeTooltip', () => {
  it('should display an icon avatar', () => {
    const { args } = IconAvatarBadgeTooltipDefault;
    render(<IconAvatarBadgeTooltipDefault {...(args as IconAvatarBadgeTooltipProps)} />);

    expect(screen.getByTestId('hashtag-icon')).toBeInTheDocument();
    expect(screen.getByText(args?.badgeCounter || 0)).toBeInTheDocument();
  });

  it('should display the content passed from props when hovering the element', () => {
    const { args } = IconAvatarBadgeTooltipDefault;
    render(<IconAvatarBadgeTooltipDefault {...(args as IconAvatarBadgeTooltipProps)} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('icon-avatar-badge-button'));
    });
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should hide the popper content when the mouse exits the element', () => {
    const { args } = IconAvatarBadgeTooltipDefault;
    render(<IconAvatarBadgeTooltipDefault {...(args as IconAvatarBadgeTooltipProps)} />);
    act(() => {
      fireEvent.mouseEnter(screen.getByTestId('icon-avatar-badge-button'));
      fireEvent.mouseLeave(screen.getByTestId('icon-avatar-badge-button'));
    });
    expect(screen.queryByText('Test')).toBeNull();
  });

  it('should run the onClick handler passed from props when clicked', () => {
    const { args } = IconAvatarBadgeTooltipDefault;
    const onClick = jest.fn();
    render(<IconAvatarBadgeTooltipDefault {...(args as IconAvatarBadgeTooltipProps)} onClick={onClick} />);
    act(() => {
      fireEvent.click(screen.getByTestId('icon-avatar-badge-button'));
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
