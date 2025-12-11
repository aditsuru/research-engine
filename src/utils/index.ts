import * as core from './error/AppError';
import * as HttpErrors from './error/HttpErrors';

export const utils = {};
export const error = {
  core,
  ...HttpErrors,
};
