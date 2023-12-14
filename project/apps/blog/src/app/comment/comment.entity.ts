import { Entity } from '@project/core';
import { Comment } from '@project/types';

export class CommentEntity implements Comment, Entity<string> {
  public id?: string;
  public text: string;
  public postId: string;
  public userId: string;
  public createdAt: Date;

  constructor(data: Comment) {
    this.populate(data);
  }

  public populate(data: Comment) {
    this.text = data.text;
    this.postId = data.postId;
    this.userId = data.userId;
    this.createdAt = data.createdAt;
  }

  public toPOJO() {
    return {
      id: this.id,
      text: this.text,
      postId: this.postId,
      userId: this.userId,
      createdAt: this.createdAt,
    };
  }
}
