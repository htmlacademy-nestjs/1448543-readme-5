import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostQuoteDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Quote text',
    example: "If you're going to do something, do it with style!",
  })
  public text?: string;

  @ApiProperty({
    description: 'Quote author',
    example: 'Jason Statham',
  })
  public author?: string;
}
