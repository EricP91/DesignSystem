export const extractInitials = (content: string | null | undefined): string => {
  const name = !content ? '' : content;
  const hasTokens = name.trim().indexOf(' ') !== -1;
  const initials = name.substring(0, hasTokens ? 1 : 2) + (hasTokens ? name.charAt(name.lastIndexOf(' ') + 1) : '');
  return initials.toUpperCase();
};
