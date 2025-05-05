export class ProductName {
  private constructor(private readonly value: string) {
    if (value.trim().length === 0 || value.length > 255) {
      throw new Error('ProductName must be 1~255 characters');
    }
  }
  static create(name: string): ProductName {
    return new ProductName(name);
  }
  getValue(): string {
    return this.value;
  }
}
