import { BadRequestException, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create/create-post-content.dto';
import { randomUUID } from 'node:crypto';
import { PostStatus } from '@project/types';
import { ContentEntityFactory } from './content-entity.factory';
import { PostErrorMessage } from './post.constant';
import { UpdatePostCommonDto } from './dto/update';
import { PostCommonEntity } from './entity';
import { fillDto } from '@project/helpers';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  public async create(dto: CreatePostDto) {
    const now = new Date();
    const { tags, type, status, ...content } = dto;

    const newPostCommonData = {
      tags: tags,
      type: type,
      userId: randomUUID(),
      createdAt: now,
      publishedAt: now,
      status: PostStatus.Published,
      isReposted: false,
    };

    const newCommonEntity = new PostCommonEntity(newPostCommonData);
    const savedCommonPost = this.postRepository.save(newCommonEntity);
    const newContentEntity = new ContentEntityFactory(
      type,
      content
    ).getContent();
    // TODO
    // 1. Создать отдельные репозитории для каждого типа контента
    // 2. Сохранить сущность в нужном репозитории
    // 3. Объединить ответ с savedCommonPost
    // return this.postRepository.save(newPostCommonData);
  }

  public async update(id: string, dto: UpdatePostCommonDto) {
    const existingPost = this.postRepository.findById(id);
    const updatedPostData = {
      ...existingPost,
      ...dto,
      publishedAt: new Date(),
    };
    // const TypeEntity = ContentEntityAdapter[dto.type];
    // const newPostEntity = new TypeEntity(updatedPostData);
    // return this.postRepository.update(id, newPostEntity);
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

    const TypeEntity = ContentEntityAdapter[originalPost.type];
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
