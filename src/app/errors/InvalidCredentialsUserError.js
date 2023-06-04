import DomainError from './DomainError';

export default class InvalidCredentialsUserError extends DomainError {
  constructor(status, ...args) {
    super(...args);
    this.status = status;
    InvalidCredentialsUserError.captureStackTrace(this, InvalidCredentialsUserError);
  }
}
