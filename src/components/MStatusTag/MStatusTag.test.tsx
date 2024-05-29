import { render, screen } from 'test-utils';
import React from 'react';
import MStatusTag from './MStatusTag';
import { UPLOAD_STATUS } from './constants';

it('should render status tag', () => {
  const { container } = render(<MStatusTag status={UPLOAD_STATUS.COMPLETED} />);
  expect(container).toBeInTheDocument();
});

it('should render tag in faild status when evidenceStatus not provided', () => {
  render(<MStatusTag />);
  const chipElement = screen.getByTestId('status-tag-chip-element');
  expect(chipElement).toBeInTheDocument();
  const className = chipElement.getAttribute('class');
  expect(className?.includes('error')).toBeTruthy();
});

it('should not render chip in statuses 0 and 1', () => {
  const { container } = render(
    <MStatusTag status={UPLOAD_STATUS.UPLOADING} progressContainerClassName="progressClassName" />
  );
  const firstChildClass = container.children[0]?.getAttribute('class');
  expect(firstChildClass?.includes('progressClassName')).toBeTruthy();
  const chipElement = screen.queryByTestId('status-tag-chip-element');
  const progressElement = screen.queryByTestId('progress-element');
  expect(chipElement).not.toBeInTheDocument();
  expect(progressElement).toBeInTheDocument();
});
