import { SellerEntity } from './seller.entity';

export interface SellerRepositoryPort {
  create(entity: SellerEntity): number;
  findOne(id: number): SellerEntity;
  update(entity: SellerEntity): number;
}
