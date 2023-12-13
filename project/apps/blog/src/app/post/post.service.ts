import { BadRequestException, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostCommonDto } from './dto/create/create-post-common.dto';
import { randomUUID } from 'node:crypto';
import { PostStatus } from '@project/types';
import { TypeEntityAdapter } from './utils/entity-adapter';
import { PostErrorMessage } from './post.constant';
import { UpdatePostCommonDto } from './dto/update';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  public async create(dto: CreatePostCommonDto) {
    const now = new Date();

    const newPostData = {
      ...dto,
      userId: randomUUID(),
      createdAt: now,
      publishedAt: now,
      status: PostStatus.Published,
      isReposted: false,
    };

    const TypeEntity = TypeEntityAdapter[dto.type];
    const newPostEntity = new TypeEntity(newPostData);
    return this.postRepository.save(newPostEntity);
  }

  public async update(id: string, dto: UpdatePostCommonDto) {
    const existingPost = this.postRepository.findById(id);
    const updatedPostData = {
      ...existingPost,
      ...dto,
      publishedAt: new Date(),
    };
    const TypeEntity = TypeEntityAdapter[dto.type];
    const newPostEntity = new TypeEntity(updatedPostData);
    return this.postRepository.update(id, newPostEntity);
  }

  public async repost(id: string, userId: string) {
    const originalPost = await this.postRepository.findRepost(id, userId);
    if (originalPost) {
      throw new BadRequestException(PostErrorMessage.AlreadyReposted);
    }
    const repostedPost = {
      ...originalPost,
      originId: originalPost.id,
      userId: userId,
      originUserId: originalPost.userId,
      isReposted: true,
      publishedAt: new Date(),
    };

    const TypeEntity = TypeEntityAdapter[originalPost.type];
    const newPostEntity = new TypeEntity(repostedPost);

    return newPostEntity;
  }

  public async delete(id: string, userId: string) {
    const post = await this.postRepository.findById(id);
    if (post.userId !== userId) {
      throw new BadRequestException(PostErrorMessage.UnableDelete);
    }
    await this.postRepository.deleteById(id);
  }
}
