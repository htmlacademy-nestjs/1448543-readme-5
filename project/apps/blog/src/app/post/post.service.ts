import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostCommonDto } from './dto/create-post-common.dto';
import { randomUUID } from 'node:crypto';
import { PostStatus } from '@project/types';
import { TypeEntityAdapter } from './utils/entity-adapter';

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
}
