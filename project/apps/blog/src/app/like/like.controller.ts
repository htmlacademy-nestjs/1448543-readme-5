import { Body, Controller, Get, Param, Post, HttpStatus } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { fillDto } from '@project/helpers';
import { LikeRdo } from './rdo/like.rdo';
import { LIKE_API_NAME, LikeErrorMessage, LikePath } from './like.constant';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags(LIKE_API_NAME)
@Controller(LIKE_API_NAME)
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiResponse({
    type: LikeRdo,
    status: HttpStatus.OK,
    description: 'Like updated',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: LikeErrorMessage.InDraft,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: LikeErrorMessage.PostNotFound,
  })
  @Post(LikePath.React)
  public async react(@Body() dto: CreateLikeDto) {
    const like = await this.likeService.react(dto);
    return fillDto(LikeRdo, like.toPOJO());
  }

  @ApiResponse({
    type: '1',
    status: HttpStatus.OK,
    description: 'Number of likes',
  })
  @Get(LikePath.PostId)
  public async getLikesCount(@Param(':id') postId: string) {
    const likesCount = await this.likeService.getLikesByPostId(postId);
    return likesCount;
  }
}
