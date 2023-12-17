import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostCommonEntity } from './entity/post-common.entity';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostCommonEntity> {
  public findRepost(
    originId: string,
    userId: string
  ): Promise<PostCommonEntity> {
    const entities = Array.from(this.entities.values());
    const post = entities.find(
      (entity) => entity.originId === originId && entity.userId === userId
    );
    return Promise.resolve(post);
  }
}
