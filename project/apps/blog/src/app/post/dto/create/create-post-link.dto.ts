import { ApiProperty } from '@nestjs/swagger';
import { CreatePostCommonDto } from './create-post-common.dto';

export class CreatePostLinkDto extends CreatePostCommonDto {
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
