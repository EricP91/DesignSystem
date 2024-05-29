import { extractInitials } from './initialsForAvatar';

describe('extractInitials', () => {
  it('should extract initials from simple name', () => {
    const initials = extractInitials('Jane Doe');
    expect(initials).toEqual('JD');
  });

  it('should extract initials for a name with multiple first names', () => {
    const initials = extractInitials('Mary Jane Doe');
    expect(initials).toEqual('MD');
  });
});
