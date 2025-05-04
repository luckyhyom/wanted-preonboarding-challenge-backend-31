import { SellerEntity } from '../../domain/seller.entity';
import { SellerRepositoryPort } from '../../domain/seller.repository.port';

export class SellerRepository implements SellerRepositoryPort {
  create(entity: SellerEntity): number {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): SellerEntity {
    throw new Error('Method not implemented.');
  }
  update(entity: SellerEntity): number {
    throw new Error('Method not implemented.');
  }
}
