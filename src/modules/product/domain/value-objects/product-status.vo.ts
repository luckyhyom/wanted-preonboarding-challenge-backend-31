export class ProductStatus {
  private static readonly ALLOWED = ['ACTIVE', 'INACTIVE', 'DISCONTINUED'];
  private constructor(private readonly value: string) {
    if (!ProductStatus.ALLOWED.includes(value)) {
      throw new Error(`Invalid ProductStatus: \${value}`);
    }
  }
  static create(status: string): ProductStatus {
    return new ProductStatus(status);
  }
  getValue(): string {
    return this.value;
  }
}
