export class FullDescription {
  private constructor(private readonly value: string) {}
  static create(desc: string): FullDescription {
    return new FullDescription(desc);
  }
  getValue(): string {
    return this.value;
  }
}
