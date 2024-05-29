import React from 'react';
import { render, screen } from 'test-utils';
import ReportEmailNotification from './ReportEmailNotification';

describe('ReportEmailNotification', () => {
  it('should render details in the key: value format', () => {
    const details = [{ key: 'key1', value: 'value1' }];
    render(
      <ReportEmailNotification
        details={details}
        btnLabel=""
        btnNavigationUrl=""
        header=""
        image={undefined}
        title=""
        description=""
        footer=""
      />
    );

    expect(screen.getByText('key1:')).toBeInTheDocument();
    expect(screen.getByText('value1')).toBeInTheDocument();
  });

  it('should render a button', () => {
    render(
      <ReportEmailNotification
        details={[]}
        btnLabel="btn"
        btnNavigationUrl=""
        header=""
        image={undefined}
        title=""
        description=""
        footer=""
      />
    );

    expect(screen.getByRole('button')).toHaveTextContent('btn');
  });
});
