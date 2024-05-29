import { fireEvent, render, screen, waitFor } from 'test-utils';

import React from 'react';
import { GroupAvatar as Template } from './AvatarGroup.stories';
import AvatarGroup from './AvatarGroup';

it('should render with no errors', () => {
  const { container } = render(<AvatarGroup {...Template.args} />);
  expect(container).toBeInTheDocument();
});

it('should register a click event when handleClickOnExtraAvatars is passed', () => {
  const dataTestId = 'group-extra-avatar';
  render(<AvatarGroup {...Template.args} />);
  fireEvent.click(screen.getByTestId(dataTestId));
});

it('should should throw error if a fragment is passed as child', () => {
  global.console = {
    error: jest.fn(),
  };

  render(
    <AvatarGroup {...Template.args}>
      <>test fragment</>
    </AvatarGroup>
  );
  expect(global.console.error).toHaveBeenCalledTimes(1);
});

it('should render group avatar badge', () => {
  Template.args.badgeContent = 1;

  render(
    <AvatarGroup {...Template.args}>
      <>test fragment</>
    </AvatarGroup>
  );

  expect(screen.getByTestId('avatar-badge')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
});
