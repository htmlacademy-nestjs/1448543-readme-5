import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostVideoDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Post headline',
    example: 'Look at this',
  })
  public headline?: string;

  @ApiProperty({
    description: 'Video link',
    example: 'https://video.com/1',
  })
  public link?: string;
}
