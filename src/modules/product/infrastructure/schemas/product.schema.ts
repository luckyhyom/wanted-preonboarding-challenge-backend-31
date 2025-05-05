// src/modules/product/infrastructure/schemas/product.schema.ts
import { EntitySchema } from 'typeorm';
import { ProductEntity } from '../../domain/product.entity';

export const ProductSchema = new EntitySchema<ProductEntity>({
  name: 'ProductEntity',
  target: () => ProductEntity,
  tableName: 'products',
  columns: {
    id: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
      transformer: { to: (v) => v.toString(), from: (v) => BigInt(v) },
    },
    name: { type: 'varchar', length: 255, nullable: false },
    slug: { type: 'varchar', length: 255, unique: true, nullable: false },
    shortDescription: {
      name: 'short_description',
      type: 'varchar',
      length: 500,
      nullable: true,
    },
    fullDescription: { name: 'full_description', type: 'text', nullable: true },
    sellerId: {
      name: 'seller_id',
      type: 'bigint',
      nullable: false,
      transformer: { to: (v) => v.toString(), from: (v) => BigInt(v) },
    },
    brandId: {
      name: 'brand_id',
      type: 'bigint',
      nullable: false,
      transformer: { to: (v) => v.toString(), from: (v) => BigInt(v) },
    },
    status: { type: 'varchar', length: 20, nullable: false },
  },
});
