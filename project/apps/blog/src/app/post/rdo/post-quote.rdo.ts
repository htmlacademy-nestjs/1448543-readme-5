import { Expose } from 'class-transformer';
import { PostRdo } from './post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PostQuoteRdo extends PostRdo {
  @ApiProperty({
    description: 'Quote text',
    example: "If you're going to do something, do it with style!",
  })
  @Expose()
  public text: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'Jason Statham',
  })
  @Expose()
  public author: string;
}
