import { Entity, EntityIdType } from './entity.interface';

export interface Repository<T extends Entity<EntityIdType>> {
  findById: (id: T['id']) => Promise<T | null>;
  save: (entity: T) => Promise<T>;
  update: (entity: T, id: T['id']) => Promise<T>;
  deleteById: (id: T['id']) => Promise<void>;
}
