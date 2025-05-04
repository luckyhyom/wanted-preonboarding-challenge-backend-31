import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerSchema } from './infrastructure/schemas/seller.schema';

@Module({
  imports: [TypeOrmModule.forFeature([SellerSchema])],
})
export class SellerModule {}
