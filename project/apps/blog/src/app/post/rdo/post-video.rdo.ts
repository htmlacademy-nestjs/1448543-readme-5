import { Expose } from 'class-transformer';
import { PostRdo } from './post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PostVideoRdo extends PostRdo {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  @Expose()
  public headline: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  @Expose()
  public link: string;
}
