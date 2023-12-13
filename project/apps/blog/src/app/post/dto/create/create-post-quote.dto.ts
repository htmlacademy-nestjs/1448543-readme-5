import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreatePostQuoteDto extends CreatePostDto {
  @ApiProperty({
    description: 'Quote text',
    example: "If you're going to do something, do it with style!",
  })
  public text: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'Jason Statham',
  })
  public author: string;
}
