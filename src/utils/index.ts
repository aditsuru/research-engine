import * as core from './error/AppError';
import * as HttpErrors from './error/HttpErrors';

export const utils = {
  error: {
    core,
    ...HttpErrors,
  },
};
