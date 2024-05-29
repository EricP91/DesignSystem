import { FileValidation } from './FileValidationStatus/types';

export interface EditProps {
  enableEdit: boolean;
  inputTitle?: string;
  inputValidator?: (value: string) => boolean;
  errorMessage?: string;
}

export type DescriptionProps = {
  enableDescription: boolean;
  addDescriptionTooltipText?: string;
  removeDescriptionTooltipText?: string;
  maxDescriptionLength?: number;
  descriptionInputValidator?: (value: string) => string | undefined;
  inputLabelText?: string;
  rootClassName?: string;
};
export interface EditableFileWithPath extends File {
  editablePath?: string;
  description?: string;
  validation?: FileValidation;
}
