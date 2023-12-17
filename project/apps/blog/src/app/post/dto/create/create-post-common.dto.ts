import { ApiProperty } from '@nestjs/swagger';
import { PostStatus, PostType } from '@project/types';

export class CreatePostCommonDto {
  @ApiProperty({
    description: 'Post type',
    example: 'text',
  })
  public type: PostType;

  @ApiProperty({
    description: 'Post status',
    example: 'published',
  })
  public status: PostStatus;

  @ApiProperty({
    description: 'Post tags',
    example: ['cooking'],
  })
  public tags: string[];
}
