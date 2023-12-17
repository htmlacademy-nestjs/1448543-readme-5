import { Expose } from 'class-transformer';
import { PostRdo } from './post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PostTextRdo extends PostRdo {
  @ApiProperty({
    description: 'Post text',
    example: 'This is my first post on this platform',
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Post headline',
    example: 'Hello world',
  })
  @Expose()
  public headline: string;

  @ApiProperty({
    description: 'Post preview',
    example: "Let's begin",
  })
  @Expose()
  public preview: string;
}
