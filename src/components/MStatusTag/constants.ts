export enum UPLOAD_STATUS {
  UPLOADING = 0,
  PROCESSING = 1,
  COMPLETED = 2,
  FAILED = 3,
  CANCELLED = 4,
  PAUSED = 5,
}

export const defaultLabels = {
  [UPLOAD_STATUS.UPLOADING]: 'Uploading',
  [UPLOAD_STATUS.PROCESSING]: 'Processing',
  [UPLOAD_STATUS.COMPLETED]: 'Completed',
  [UPLOAD_STATUS.FAILED]: 'Failed',
  [UPLOAD_STATUS.CANCELLED]: 'Canceled',
  [UPLOAD_STATUS.PAUSED]: 'Paused',
};
