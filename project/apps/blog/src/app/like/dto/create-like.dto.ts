import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({
    description: 'Like user ID',
    example: '1',
  })
  public userId: string;

  @ApiProperty({
    description: 'Post ID related to like',
    example: '1',
  })
  public postId: string;
}
