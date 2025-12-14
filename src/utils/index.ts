import * as core from './error/AppError';
import * as HttpErrors from './error/HttpErrors';

export { logger } from './logger';

export const utils = {};
export const error = {
  core,
  ...HttpErrors,
};
