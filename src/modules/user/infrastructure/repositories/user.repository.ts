import { UserEntity } from '../../domain/user.entity';
import { UserRepositoryPort } from '../../domain/user.repository.port';

export class UserRepository implements UserRepositoryPort {
  create(entity: UserEntity): number {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): UserEntity {
    throw new Error('Method not implemented.');
  }
  update(entity: UserEntity): number {
    throw new Error('Method not implemented.');
  }
}
