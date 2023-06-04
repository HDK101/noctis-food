export default class DomainError extends Error {
  constructor(status, ...args) {
    super(...args);
    this.status = status;
    DomainError.captureStackTrace(this, DomainError);
  }
}
