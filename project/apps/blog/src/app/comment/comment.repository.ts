import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  public getByPostId(postId): Promise<CommentEntity[]> {
    const entities = Array.from(this.entities.values());
    const postEntites = entities.filter((entity) => entity.postId === postId);
    return Promise.resolve(postEntites);
  }
}
