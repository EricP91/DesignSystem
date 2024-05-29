/* eslint-disable no-console */
import { Story } from '@storybook/react';
import React from 'react';
import MAutocomplete, { AutocompleteOption, MAutocompleteProps } from './MAutocomplete';

export default {
  title: 'Components/Autocomplete',
};

const Template: Story<MAutocompleteProps> = (args) => <MAutocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Locations',
  options: [
    { id: 6, text: 'UTC,' },
    { id: 1, text: 'Abidjan,', textSuffix: ' Africa (UTC+00:00)' },
    { id: 2, text: 'Algiers,', textSuffix: ' Africa (UTC+01:00)' },
    { id: 3, text: 'Bissau,', textSuffix: ' Africa (UTC+00:00)' },
    { id: 4, text: 'Bucharest,', textSuffix: ' Europe (UTC+02:00)' },
    { id: 5, text: 'New York,', textSuffix: ' America (UTC-05:00)' },
    { id: 7, text: 'Andorra,', textSuffix: ' Europe (UTC+01:00)' },
    { id: 8, text: 'Athens,', textSuffix: ' Europe (UTC+02:00)' },
    { id: 9, text: 'New York,', textSuffix: ' America (UTC+02:00)' },
  ],
  onChangeAutocomplete: (selectedOption: AutocompleteOption | null) => {
    console.log('onChange', selectedOption);
  },
};

export const WithPreselectedOption = Template.bind({});
WithPreselectedOption.args = {
  ...Default.args,
  preselectedOption: Default?.args?.options?.[0],
};
