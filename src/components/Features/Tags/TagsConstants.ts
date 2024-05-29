import { MTheme } from '../../../theme';

const TAG_SIZE = 1.5;

export const tagsSize = (theme: MTheme): string => theme.spacing(TAG_SIZE);

export const tagsContainerSize = (theme: MTheme): string => theme.spacing(TAG_SIZE + 0.75 * 2);
