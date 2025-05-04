export class InvalidTagNameError extends Error {
  constructor() {
    super('태그 이름은 1~100자여야 합니다.');
  }
}
export class InvalidTagSlugError extends Error {
  constructor() {
    super('태그 슬러그는 1~100자여야 합니다.');
  }
}
