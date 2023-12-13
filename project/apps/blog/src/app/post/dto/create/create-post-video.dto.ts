import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreatePostVideoDto extends CreatePostDto {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  public headline: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  public link: string;
}
