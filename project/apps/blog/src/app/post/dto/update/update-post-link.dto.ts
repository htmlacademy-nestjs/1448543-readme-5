import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostLinkDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Link URL',
    example: 'https://github.com',
  })
  public link?: string;

  @ApiProperty({
    description: 'Link description',
    example: 'Greatest website ever',
  })
  public description?: string;
}
