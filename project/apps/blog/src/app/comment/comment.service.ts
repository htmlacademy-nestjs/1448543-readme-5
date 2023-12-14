import { Injectable, ConflictException } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './comment.entity';
import { CommentErrorMessage } from './comment.constant';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  public async create(dto: CreateCommentDto, userId: string) {
    const newCommentData = {
      ...dto,
      userId,
      createdAt: new Date(),
    };
    const newCommentEntity = new CommentEntity(newCommentData);
    const newComment = await this.commentRepository.save(newCommentEntity);
    return newComment;
  }

  public async getComments(postId: string) {
    const comments = await this.commentRepository.getByPostId(postId);
    return comments;
  }

  public async deleteComment(postId: string, userId) {
    const comment = await this.commentRepository.findById(postId);
    if (comment.userId !== userId) {
      throw new ConflictException(CommentErrorMessage.Conflict);
    }
    await this.commentRepository.deleteById(comment.id);
  }
}
