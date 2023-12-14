import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeRepository } from './like.repository';
import { LikeEntity } from './like.entity';
import { PostRepository } from '../post/post.repository';
import { PostStatus } from '@project/types';
import { LikeErrorMessage } from './like.constant';

@Injectable()
export class LikeService {
  constructor(
    private readonly likeRepository: LikeRepository,
    private readonly postRepository: PostRepository
  ) {}
  public async react(dto: CreateLikeDto) {
    const { postId, userId } = dto;
    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw new NotFoundException(LikeErrorMessage.PostNotFound);
    }
    if (post.status === PostStatus.Draft) {
      throw new BadRequestException(LikeErrorMessage.InDraft);
    }
    const like = await this.likeRepository.findByPostId(postId);
    if (!like) {
      const newLike = await this.createLike(dto);
      return newLike;
    }
    const hasUserReaction = like.userIds.has(userId);
    if (hasUserReaction) {
      like.unsetLike(userId);
    } else {
      like.setLike(userId);
    }
    return like;
  }

  private async createLike(dto: CreateLikeDto) {
    const newEntity = new LikeEntity({
      postId: dto.postId,
      userIds: new Set(dto.userId),
    });
    const savedEntity = await this.likeRepository.save(newEntity);
    return savedEntity;
  }

  public async getLikesByPostId(postId: string) {
    const like = await this.likeRepository.findByPostId(postId);
    if (!like) {
      return 0;
    }
    const { userIds } = like;
    return userIds.size;
  }
}
