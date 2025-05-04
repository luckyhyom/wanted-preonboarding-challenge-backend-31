import { SellerProps } from './seller.types';
import { InvalidSellerNameError } from './seller.errors';

export class SellerEntity {
  private constructor(private readonly props: Required<SellerProps>) {}

  static create(props: SellerProps): SellerEntity {
    if (props.name.trim().length === 0 || props.name.length > 100) {
      throw new InvalidSellerNameError();
    }
    const now = props.createdAt ?? new Date();
    return new SellerEntity({
      id: props.id ?? BigInt(0),
      name: props.name,
      description: props.description ?? null,
      logoUrl: props.logoUrl ?? null,
      rating: props.rating ?? null,
      contactEmail: props.contactEmail ?? null,
      contactPhone: props.contactPhone ?? null,
      createdAt: now,
    });
  }
}
