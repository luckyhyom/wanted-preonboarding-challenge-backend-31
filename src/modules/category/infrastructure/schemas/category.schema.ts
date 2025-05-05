import { EntitySchema } from 'typeorm';
import { CategoryEntity } from '../../domain/category.entity';

export const CategorySchema = new EntitySchema<CategoryEntity>({
  name: 'CategoryEntity',
  target: CategoryEntity,
  tableName: 'categories',
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
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    slug: {
      type: 'varchar',
      length: 100,
      unique: true,
      nullable: false,
    },
    description: {
      type: 'text',
      nullable: true,
    },
    level: {
      type: 'integer',
      nullable: false,
    },
    imageUrl: {
      name: 'image_url',
      type: 'varchar',
      length: 255,
      nullable: true,
    },
  },
  relations: {
    parent: {
      type: 'many-to-one',
      target: () => CategoryEntity, // TypeORM 0.3.x의 EntitySchema가 관계(relations) 정의에서 target 옵션이 “함수”인지 “문자열”인지로 구분해 처리하는 방식
      joinColumn: { name: 'parent_id' },
      nullable: true,
    },
    children: {
      type: 'one-to-many',
      target: () => CategoryEntity,
      inverseSide: 'parent',
    },
  },
});
