export class CategoryDescription {
  constructor(private readonly value?: string) {}
  getValue(): string | undefined {
    return this.value;
  }
}
