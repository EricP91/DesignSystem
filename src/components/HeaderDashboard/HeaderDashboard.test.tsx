import { render } from 'test-utils';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UploadHeaderDashboard } from './HeaderDashboard.stories';

it('should render without errors when provided the minimum required props', () => {
  const { container } = render(
    <BrowserRouter>
      <UploadHeaderDashboard {...UploadHeaderDashboard.args} />
    </BrowserRouter>
  );

  expect(container).toBeInTheDocument();
});

it('should render a heading with the provided text prop', () => {
  const headingText = 'random-string-name';
  const { getByTestId } = render(
    <BrowserRouter>
      <UploadHeaderDashboard
        {...UploadHeaderDashboard.args}
        moreLink={[UploadHeaderDashboard?.args?.moreLink]}
        heading={headingText}
      />
    </BrowserRouter>
  );

  expect(getByTestId('headerDashboardHeading')).toHaveTextContent(headingText);
});
