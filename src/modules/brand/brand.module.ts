import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandSchema } from './infrastructure/schemas/brand.schema';

@Module({
  imports: [TypeOrmModule.forFeature([BrandSchema])],
})
export class BrandModule {}
