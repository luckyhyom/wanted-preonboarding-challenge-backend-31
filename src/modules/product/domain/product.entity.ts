// src/modules/product/domain/product.entity.ts
import { ProductProps } from './product.types';
import { ProductName } from './value-objects/product-name.vo';
import { ProductSlug } from './value-objects/product-slug.vo';
import { ShortDescription } from './value-objects/short-description.vo';
import { FullDescription } from './value-objects/full-description.vo';
import { ProductStatus } from './value-objects/product-status.vo';

export class ProductEntity {
  private constructor(private readonly props: Required<ProductProps>) {}

  static create(props: ProductProps): ProductEntity {
    return new ProductEntity({
      id: props.id ?? BigInt(0),
      name: props.name,
      slug: props.slug,
      shortDescription: props.shortDescription,
      fullDescription: props.fullDescription,
      sellerId: props.sellerId,
      brandId: props.brandId,
      status: props.status,
    });
  }

  get id(): bigint {
    return this.props.id;
  }
  get name(): ProductName {
    return this.props.name;
  }
  get slug(): ProductSlug {
    return this.props.slug;
  }
  get shortDescription(): ShortDescription {
    return this.props.shortDescription;
  }
  get fullDescription(): FullDescription {
    return this.props.fullDescription;
  }
  get sellerId(): bigint {
    return this.props.sellerId;
  }
  get brandId(): bigint {
    return this.props.brandId;
  }
  get status(): ProductStatus {
    return this.props.status;
  }
}
