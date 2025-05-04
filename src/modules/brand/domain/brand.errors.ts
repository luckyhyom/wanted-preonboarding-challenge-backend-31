export class InvalidBrandNameError extends Error {
  constructor() {
    super('브랜드 이름은 1~100자여야 합니다.');
  }
}
export class InvalidBrandSlugError extends Error {
  constructor() {
    super('브랜드 슬러그는 1~100자여야 합니다.');
  }
}
