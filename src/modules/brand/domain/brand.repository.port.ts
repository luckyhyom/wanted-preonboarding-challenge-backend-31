import { BrandEntity } from './brand.entity';

export interface BrandRepositoryPort {
  create(entity: BrandEntity): number;
  findOne(id: number): BrandEntity;
  update(entity: BrandEntity): number;
}
