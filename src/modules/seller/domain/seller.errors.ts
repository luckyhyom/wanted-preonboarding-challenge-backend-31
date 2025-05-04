export class InvalidSellerNameError extends Error {
  constructor() {
    super('판매자 이름은 1~100자여야 합니다.');
  }
}
