export const ErrorCodes = {
  // User
  USER_NOT_FOUND: 1001,
  INVALID_CREDENTIALS: 1002,
} as const;

// Cria um tipo baseado nas chaves do objeto acima
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
