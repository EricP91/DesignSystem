export const isARGBFormat = (color: string): boolean => {
  const argbRegexPattern = new RegExp(/^#[0-9A-F]{8}$/i);
  return argbRegexPattern.test(color);
};

export const convertARGBToRGBA = (color: string): string => color.replace(/#(..)(......)/, '#$2$1');

export const parseColor = (color: string): string => {
  if (isARGBFormat(color)) {
    return convertARGBToRGBA(color);
  }
  return color;
};
