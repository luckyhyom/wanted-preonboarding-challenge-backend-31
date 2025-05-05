import { CategoryEntity } from './category.entity';

export interface CategoryRepositoryPort {
  create(entity: CategoryEntity): Promise<number>;
  findById(id: bigint): Promise<CategoryEntity | null>;
  findChildren(parentId: bigint): Promise<CategoryEntity[]>;
  update(entity: CategoryEntity): Promise<number>;
  delete(id: bigint): Promise<void>;
}
