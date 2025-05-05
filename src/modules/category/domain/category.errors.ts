export class InvalidCategoryNameError extends Error {
  constructor() {
    super('카테고리 이름은 1~100자 사이여야 합니다.');
  }
}
export class InvalidCategorySlugError extends Error {
  constructor() {
    super('카테고리 슬러그는 1~100자 사이여야 합니다.');
  }
}
