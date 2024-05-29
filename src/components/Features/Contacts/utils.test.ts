import { Contact } from './types';
import { searchContactsByQuery } from './utils';

describe('searchContactsByQuery', () => {
  const contacts: Contact[] = [
    { id: '1', name: 'User Name', identifier: '' },
    { id: '2', name: '', identifier: 'User ID' },
    { id: '3', name: '', identifier: '' },
  ];

  it('should search by name', () => {
    const [searchResult] = searchContactsByQuery(contacts, 'name');
    expect(searchResult.id).toEqual(contacts[0].id);
  });

  it('should search by identifier', () => {
    const [searchResult] = searchContactsByQuery(contacts, 'id');
    expect(searchResult.id).toEqual(contacts[1].id);
  });
});
