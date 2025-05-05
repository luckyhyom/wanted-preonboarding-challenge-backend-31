export class ProductSlug {
  private constructor(private readonly value: string) {
    if (value.trim().length === 0 || value.length > 255) {
      throw new Error('ProductSlug must be 1~255 characters');
    }
  }
  static create(slug: string): ProductSlug {
    return new ProductSlug(slug);
  }
  getValue(): string {
    return this.value;
  }
}
