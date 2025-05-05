import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../../domain/category.entity';
import { CategoryRepositoryPort } from '../../domain/category.repository.port';

export class CategoryRepository implements CategoryRepositoryPort {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repo: Repository<CategoryEntity>,
  ) {}

  async create(entity: CategoryEntity): Promise<number> {
    const result = await this.repo.insert(entity as any);
    return result.identifiers[0].id;
  }

  async findById(id: bigint): Promise<CategoryEntity | null> {
    return this.repo.findOne({ where: { id } }) ?? null;
  }

  async findChildren(parentId: bigint): Promise<CategoryEntity[]> {
    return this.repo.find({ where: { parent: { id: parentId } } });
  }

  async update(entity: CategoryEntity): Promise<number> {
    // Use an object criteria rather than raw bigint
    const result = await this.repo.update({ id: entity.id }, entity as any);
    return result.affected ?? 0;
  }

  async delete(id: bigint): Promise<void> {
    // Use an object criteria for delete as well
    await this.repo.delete({ id });
  }
}
