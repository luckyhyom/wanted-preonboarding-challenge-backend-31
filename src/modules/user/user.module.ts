import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './infrastructure/schemas/user.schema';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [],
  controllers: [],
})
export class UserModule {}
