export const expectedCommonStyles = {
  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.12)',
  border: `1px solid #D1E4F9`,
  cursor: 'default',
};

export const expectedActiveInfoStyles = {
  ...expectedCommonStyles,
  border: '2px solid #6884d9',
};

export const expectedActiveSuccessStyles = {
  ...expectedCommonStyles,
  border: '2px solid #44af69',
};

export const expectedActiveWarningStyles = {
  ...expectedCommonStyles,
  border: '2px solid #ff891a',
};

export const expectedActiveErrorStyles = {
  ...expectedCommonStyles,
  border: '2px solid #eb1633',
};

export const expectedInActiveErrorStyles = {
  ...expectedCommonStyles,
  border: '1px solid #fac5c5',
};
