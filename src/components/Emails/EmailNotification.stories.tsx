import { Story } from '@storybook/react';
import React from 'react';
import { Typography } from '@mui/material';
import EmailNotification, { EmailNotificationProps } from './EmailNotification';
import { FailureMailImage, GeneralErrorImage, SuccessMailImage } from '../../assets/images';
import ReportEmailNotification, { ReportEmailNotificationProps } from './ReportEmailNotification';

export default {
  title: 'Components/Emails',
};

const Template: Story<EmailNotificationProps> = ({ logo, header, image, title, description, content, footer }) => (
  <EmailNotification
    logo={logo}
    header={header}
    image={image}
    title={title}
    description={description}
    content={content}
    footer={footer}
  />
);

export const Default = Template.bind({});
Default.args = {
  logo: undefined,
  header: 'The header of the mail',
  title: 'Your title.',
  description: 'Any description you want to add.',
  footer: 'This will be the footer.',
  image: <GeneralErrorImage />,
  content: <Typography>Any type of content</Typography>,
};

const ReportEmailTemplate: Story<ReportEmailNotificationProps> = ({
  logo,
  header,
  image,
  title,
  description,
  details,
  btnLabel,
  btnNavigationUrl,
  footer,
}) => (
  <ReportEmailNotification
    logo={logo}
    details={details}
    btnLabel={btnLabel}
    btnNavigationUrl={btnNavigationUrl}
    header={header}
    image={image}
    title={title}
    description={description}
    footer={footer}
  />
);
export const FailureNotification = ReportEmailTemplate.bind({});
FailureNotification.args = {
  header: 'Hello, Julia Black',
  title: 'Your report was not generated.',
  description: 'Please log in, enter your evidence, and try again. ',
  image: <FailureMailImage />,
  btnLabel: 'Log in',
  btnNavigationUrl: 'navigate',
  details: [
    { key: 'Evidence name', value: 'C21-00187don-iphone-burner' },
    { key: 'Incident/Case name', value: 'New York Investigations - don' },
    { key: 'Report creation date', value: '10:52:34, 25/11/2022' },
  ],
};

export const SuccessNotification = ReportEmailTemplate.bind({});
SuccessNotification.args = {
  header: 'Hello, Julia Black',
  title: 'Success. Your report was generated.',
  description: 'To download the report, log in and navigate to your evidence.',
  footer: 'The report will be available for download for 14 days.',
  image: <SuccessMailImage />,
  btnLabel: 'Log in',
  btnNavigationUrl: 'navigate',
  details: [
    { key: 'Evidence name', value: 'C21-00187don-iphone-burner' },
    { key: 'Incident/Case name', value: 'New York Investigations - don' },
    { key: 'Report creation date', value: '10:52:34, 25/11/2022' },
  ],
};
