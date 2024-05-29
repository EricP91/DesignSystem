import { Contact } from './types';

export const getContactSearchField = (contact: Contact): string => {
  if (contact.name) {
    return contact.name.toLowerCase();
  }
  if (contact.identifier) {
    return contact.identifier.toLowerCase();
  }
  return '';
};

const hasContactSearchFieldMatches = (contact: Contact, query: string): boolean =>
  getContactSearchField(contact).includes(query.toLowerCase());

export const searchContactsByQuery = (contacts: Contact[], query: string): Contact[] =>
  contacts.filter((contact) => hasContactSearchFieldMatches(contact, query));
