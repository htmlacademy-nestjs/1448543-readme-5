import { Entity } from '@project/core';
import { Like } from '@project/types';

export class LikeEntity implements Like, Entity<string> {
  public id?: string;
  public postId: string;
  public userIds: Set<string>;

  constructor(data: Like) {
    this.populate(data);
  }

  public populate(data: Like) {
    this.postId = data.postId;
    this.userIds = data.userIds;
  }

  public toPOJO() {
    return {
      id: this.id,
      postId: this.postId,
      userIds: this.userIds,
    };
  }

  public async setLike(userId: string): Promise<LikeEntity> {
    this.userIds.add(userId);
    return this;
  }

  public async unsetLike(userId: string): Promise<LikeEntity> {
    this.userIds.delete(userId);
    return this;
  }
}
