import { AbstractPost, PostStatus, PostType } from '@project/types';

export abstract class PostEntity implements AbstractPost {
  public id?: string;
  public originId?: string;
  public userId?: string;
  public originUserId?: string;
  public createdAt: Date;
  public publishedAt: Date;
  public status: PostStatus;
  public type: PostType;
  public isReposted: boolean;
  public tags: string[];

  constructor(data: AbstractPost) {
    this.fillIntance(data);
  }

  protected getPlainObject() {
    return {
      id: this.id,
      originId: this.originId,
      userId: this.userId,
      originUserId: this.originUserId,
      createdAt: this.createdAt,
      publishedAt: this.publishedAt,
      status: this.status,
      type: this.type,
      isReposted: this.isReposted,
      tags: this.tags,
    };
  }

  protected fillIntance(data: AbstractPost) {
    this.id = data.id;
    this.originId = data.originId;
    this.userId = data.userId;
    this.originUserId = data.originUserId;
    this.createdAt = data.createdAt;
    this.publishedAt = data.publishedAt;
    this.status = data.status;
    this.type = data.type;
    this.isReposted = data.isReposted;
    this.tags = data.tags;
  }
}
