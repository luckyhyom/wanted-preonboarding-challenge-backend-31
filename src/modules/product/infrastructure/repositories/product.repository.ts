import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../domain/product.entity';
import { ProductRepositoryPort } from '../../domain/product.repository.port';

export class ProductRepository implements ProductRepositoryPort {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repo: Repository<ProductEntity>,
  ) {}

  async create(entity: ProductEntity): Promise<number> {
    const result = await this.repo.insert(entity as any);
    return result.identifiers[0].id;
  }

  async findById(id: bigint): Promise<ProductEntity | null> {
    return this.repo.findOne({ where: { id } }) ?? null;
  }

  async update(entity: ProductEntity): Promise<number> {
    const result = await this.repo.update({ id: entity.id }, entity as any);
    return result.affected ?? 0;
  }

  async delete(id: bigint): Promise<void> {
    await this.repo.delete({ id });
  }
}
