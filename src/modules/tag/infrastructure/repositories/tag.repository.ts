import { TagEntity } from '../../domain/tag.entity';
import { TagRepositoryPort } from '../../domain/tag.repository.port';

export class TagRepository implements TagRepositoryPort {
  create(entity: TagEntity): number {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): TagEntity {
    throw new Error('Method not implemented.');
  }
  update(entity: TagEntity): number {
    throw new Error('Method not implemented.');
  }
}
