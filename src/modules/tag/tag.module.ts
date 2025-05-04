import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagSchema } from './infrastructure/schemas/tag.schema';

@Module({
  imports: [TypeOrmModule.forFeature([TagSchema])],
})
export class TagModule {}
