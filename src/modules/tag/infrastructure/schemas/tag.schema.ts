import { EntitySchema } from 'typeorm';
import { TagEntity } from '../../domain/tag.entity';

export const TagSchema = new EntitySchema<TagEntity>({
  name: 'TagEntity',
  target: TagEntity,
  tableName: 'tags',
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
  },
});
