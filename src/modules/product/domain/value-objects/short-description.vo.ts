export class ShortDescription {
  private constructor(private readonly value: string) {
    if (value.length > 500) {
      throw new Error('ShortDescription must be up to 500 characters');
    }
  }
  static create(desc: string): ShortDescription {
    return new ShortDescription(desc);
  }
  getValue(): string {
    return this.value;
  }
}
