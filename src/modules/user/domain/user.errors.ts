export class InvalidEmailError extends Error {
  constructor() {
    super('이메일 형식이 올바르지 않습니다.');
  }
}

export class InvalidNameError extends Error {
  constructor() {
    super('이름은 1~100자여야 합니다.');
  }
}
