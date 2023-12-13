import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LikeRdo {
  @ApiProperty({
    description: 'Like unique ID',
    example: '1',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Post ID related to like',
    example: '1',
  })
  @Expose()
  public postId: string;
}
