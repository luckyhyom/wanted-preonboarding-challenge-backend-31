import { EntitySchema } from 'typeorm';
import { BrandEntity } from '../../domain/brand.entity';

export const BrandSchema = new EntitySchema<BrandEntity>({
  name: 'BrandEntity',
  target: BrandEntity,
  tableName: 'brands',
  columns: {
    id: {
      type: 'bigint',
      primary: true,
      generated: 'increment',
      transformer: {
        to: (v: bigint) => v.toString(),
        from: (v: string) => BigInt(v),
      },
    },
    name: {
      type: String,
      length: 100,
      nullable: false,
    },
    slug: {
      type: String,
      length: 100,
      unique: true,
      nullable: false,
    },
    description: {
      type: 'text',
      nullable: true,
    },
    logoUrl: {
      name: 'logo_url',
      type: String,
      length: 255,
      nullable: true,
    },
    website: {
      type: String,
      length: 255,
      nullable: true,
    },
  },
});
