import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import { Default as AuthUserAvatar } from './AuthUserAvatar.stories';

describe('AuthUserAvatar test', () => {
  it('should render an avatar with picture, primary and secondary text', () => {
    render(<AuthUserAvatar {...AuthUserAvatar.args} />);
    expect(screen.getByTestId('textPrimary')).toHaveTextContent(`${AuthUserAvatar?.args?.primaryText}`);
    expect(screen.getByTestId('textSecondary')).toHaveTextContent(`${AuthUserAvatar?.args?.secondaryText}`);
  });

  it('should render the loading state', () => {
    render(<AuthUserAvatar {...AuthUserAvatar.args} isLoading />);
    expect(screen.getByTestId('textPrimarySkeleton')).toBeInTheDocument();
    expect(screen.getByTestId('textSecondarySkeleton')).toBeInTheDocument();
  });

  it('should fire an action when clicked on the secondary text and icon', () => {
    const mockAction = jest.fn();
    render(<AuthUserAvatar {...AuthUserAvatar.args} onClickSecondaryText={mockAction} isLoading />);
    const secondaryText = screen.getByTestId('secondaryTextWrapper');
    fireEvent.click(secondaryText);

    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
