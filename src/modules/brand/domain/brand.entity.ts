import { BrandProps } from './brand.types';
import { InvalidBrandNameError, InvalidBrandSlugError } from './brand.errors';

export class BrandEntity {
  private constructor(private readonly props: Required<BrandProps>) {}

  static create(props: BrandProps): BrandEntity {
    if (props.name.trim().length === 0 || props.name.length > 100) {
      throw new InvalidBrandNameError();
    }
    if (props.slug.trim().length === 0 || props.slug.length > 100) {
      throw new InvalidBrandSlugError();
    }
    return new BrandEntity({
      id: props.id ?? BigInt(0),
      name: props.name,
      slug: props.slug,
      description: props.description ?? null,
      logoUrl: props.logoUrl ?? null,
      website: props.website ?? null,
    });
  }
}
