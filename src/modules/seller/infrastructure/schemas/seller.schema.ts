import { EntitySchema } from 'typeorm';
import { SellerEntity } from '../../domain/seller.entity';

export const SellerSchema = new EntitySchema<SellerEntity>({
  name: 'SellerEntity',
  target: SellerEntity,
  tableName: 'sellers',
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
    rating: {
      type: 'decimal',
      precision: 3,
      scale: 2,
      nullable: true,
    },
    contactEmail: {
      name: 'contact_email',
      type: String,
      length: 100,
      nullable: true,
    },
    contactPhone: {
      name: 'contact_phone',
      type: String,
      length: 20,
      nullable: true,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP(6)',
      nullable: false,
      createDate: true,
    },
  },
});
