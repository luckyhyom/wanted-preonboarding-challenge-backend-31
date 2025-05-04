import { TagEntity } from './tag.entity';

export interface TagRepositoryPort {
  create(entity: TagEntity): number;
  findOne(id: number): TagEntity;
  update(entity: TagEntity): number;
}
