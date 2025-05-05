import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSchema } from './infrastructure/schemas/product.schema';
import { ProductRepository } from './infrastructure/repositories/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSchema])],
  providers: [{ provide: 'ProductRepositoryPort', useClass: ProductRepository }],
  exports: ['ProductRepositoryPort'],
})
export class ProductModule {}
