import { InvalidCategoryNameError } from '../category.errors';

export class CategoryName {
  private constructor(private readonly value: string) {
    if (value.trim().length === 0 || value.length > 100) {
      throw new InvalidCategoryNameError();
    }
  }
  static create(name: string): CategoryName {
    return new CategoryName(name);
  }
  getValue(): string {
    return this.value;
  }
}
