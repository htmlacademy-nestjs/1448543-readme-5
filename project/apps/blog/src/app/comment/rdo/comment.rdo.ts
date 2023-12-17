import { ApiProperty } from '@nestjs/swagger';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment ID',
    example: '1',
  })
  public id: string;

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

  @ApiProperty({
    description: 'Comment author ID',
    example: '1',
  })
  public userId: string;

  @ApiProperty({
    description: 'Comment creation date',
    example: '1970-01-01T00:00:00.000Z',
  })
  public createdAt: string;
}
