import { BrandEntity } from '../../domain/brand.entity';
import { BrandRepositoryPort } from '../../domain/brand.repository.port';

export class BrandRepository implements BrandRepositoryPort {
  create(entity: BrandEntity): number {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): BrandEntity {
    throw new Error('Method not implemented.');
  }
  update(entity: BrandEntity): number {
    throw new Error('Method not implemented.');
  }
}
