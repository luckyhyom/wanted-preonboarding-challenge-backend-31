import { UserEntity } from './user.entity';

export interface UserRepositoryPort {
  create(entity: UserEntity): number; // User's PK
  findOne(id: number): UserEntity;
  update(entity: UserEntity): number;
}
