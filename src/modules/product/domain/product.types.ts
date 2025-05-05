import { ProductName } from './value-objects/product-name.vo';
import { ProductSlug } from './value-objects/product-slug.vo';
import { ShortDescription } from './value-objects/short-description.vo';
import { FullDescription } from './value-objects/full-description.vo';
import { ProductStatus } from './value-objects/product-status.vo';

export interface ProductProps {
  id?: bigint;
  name: ProductName;
  slug: ProductSlug;
  shortDescription: ShortDescription;
  fullDescription: FullDescription;
  sellerId: bigint;
  brandId: bigint;
  status: ProductStatus;
}
