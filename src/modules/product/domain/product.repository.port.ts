import { ProductEntity } from './product.entity';

export interface ProductRepositoryPort {
  create(entity: ProductEntity): Promise<number>;
  findById(id: bigint): Promise<ProductEntity | null>;
  update(entity: ProductEntity): Promise<number>;
  delete(id: bigint): Promise<void>;
}
