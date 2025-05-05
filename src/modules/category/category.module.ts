import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorySchema } from './infrastructure/schemas/category.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySchema])],
})
export class CategoryModule {}
