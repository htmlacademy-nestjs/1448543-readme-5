import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Comment text',
    example: 'This really awesome',
  })
  public text: string;

  @ApiProperty({
    description: 'Post ID related to comment',
    example: '1',
  })
  public postId: string;
}
