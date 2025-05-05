import { InvalidCategorySlugError } from '../category.errors';

export class CategorySlug {
  private constructor(private readonly value: string) {
    if (value.trim().length === 0 || value.length > 100) {
      throw new InvalidCategorySlugError();
    }
  }
  static create(slug: string): CategorySlug {
    return new CategorySlug(slug);
  }
  getValue(): string {
    return this.value;
  }
}
