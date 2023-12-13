import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { LikeEntity } from './like.entity';

@Injectable()
export class LikeRepository extends BaseMemoryRepository<LikeEntity> {
  public findByPostId(postId: string) {
    const entities = Array.from(this.entities.values());
    const like = entities.find((entity) => entity.postId === postId);
    return Promise.resolve(like);
  }
}
