import { ErrorCode } from '../constants/error-codes';

export class HttpException extends Error {
  message: string;
  errorCode: number;
  statusCode: number;
  errors: ErrorCode;

  constructor(
    message: string,
    errorCode: ErrorCode,
    statusCode: number,
    error: ErrorCode,
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.errors = error;
  }
}
