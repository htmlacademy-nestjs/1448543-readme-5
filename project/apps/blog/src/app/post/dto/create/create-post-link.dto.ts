import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreatePostLinkDto extends CreatePostDto {
  @ApiProperty({
    description: 'Link URL',
    example: 'https://github.com',
  })
  public link: string;

  @ApiProperty({
    description: 'Link description',
    example: 'Greatest website ever',
  })
  public description: string;
}
