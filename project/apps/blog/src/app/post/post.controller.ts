import { Body, Controller, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostCommonDto, CreatePostTextDto } from './dto';
import { getPostRdo } from './utils/rdo-adapter';
import { ApiTags, ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { PostRdo } from './rdo/post.rdo';

@ApiTags('post')
@ApiExtraModels(CreatePostTextDto)
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'Post created',
  })
  @Post('create')
  public async create(@Body() dto: CreatePostCommonDto) {
    const newPost = await this.postService.create(dto);
    return getPostRdo(newPost);
  }
}
