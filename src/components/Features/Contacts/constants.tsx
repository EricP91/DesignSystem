import React, { CSSProperties } from 'react';
import { v4 as uuid } from 'uuid';
import { InfiniteLoaderProps } from '../../InfiniteScroll/types';
import ContactListItem from './ContactListItem';
import { Contact } from './types';

export const contactNoImage: Contact = {
  id: uuid(),
};

export const contactImage: Contact = {
  id: uuid(),
  image: 'avatar.png',
};

export const contactName: Contact = {
  id: uuid(),
  name: 'John Doe',
};

export const contactIdentifierEmail: Contact = {
  id: uuid(),
  identifier: 'm@gmail.com',
};

export const contactIdentifierWithName: Contact = {
  id: uuid(),
  identifier: 'kosta@gmail.com',
  name: 'Kosta Rubin',
};

export const contactIdentifierPhoneNumber: Contact = {
  id: uuid(),
  identifier: '+972501234567',
};

export const contactAllFields: Contact = {
  id: uuid(),
  image: 'avatar.png',
  name: 'John Doe',
  identifier: 'johndoe@gmail.com',
};

export const unidentifiedContact: Contact = {
  id: 'No id',
  name: '[Unidentified]',
  identifier: '[No identifier]',
};

export const contacts = [
  contactAllFields,
  contactNoImage,
  contactImage,
  contactName,
  contactIdentifierEmail,
  contactIdentifierPhoneNumber,
  contactIdentifierWithName,
];

export const contactBigList = [...Array(100)].map((_, index) => contacts[index % contacts.length]);

export const infiniteLoader: InfiniteLoaderProps = {
  isItemLoaded: (index) => !!contacts[index],
  itemCount: contactBigList.length,
  loadMoreItems: () => Promise.resolve(),
  minimumBatchSize: 10,
  threshold: 50,
};

export const itemRenderer = ({ index, style }: { index: number; style: CSSProperties }): JSX.Element => (
  <div style={style}>
    <ContactListItem {...contactBigList[index]} />
  </div>
);

export const fixedSizeList = {
  itemCount: contactBigList.length,
  itemSize: 35,
};
