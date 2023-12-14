import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  HttpStatus,
  Delete,
  Param,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/helpers';
import { CommentRdo } from './rdo/comment.rdo';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { COMMENT_API_NAME, CommentPath } from './comment.constant';

@ApiTags(COMMENT_API_NAME)
@Controller(COMMENT_API_NAME)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment created',
  })
  @Post(CommentPath.Create)
  public async create(@Body() dto: CreateCommentDto, @Req() user: string) {
    const newComment = await this.commentService.create(dto, user);
    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({
    type: [CommentRdo],
    status: HttpStatus.OK,
    description: 'List of comments',
  })
  @Get(CommentPath.CommentsList)
  public async getComments(@Body() postId: string) {
    const comments = await this.commentService.getComments(postId);
    return comments.map((comment) => fillDto(CommentRdo, comment.toPOJO()));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comment deleted',
  })
  @Delete(CommentPath.Delete)
  public async delete(@Param(':id') id: string, @Body() userId: string) {
    await this.commentService.deleteComment(id, userId);
  }
}
