import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostCommonDto } from './update-post-common.dto';

export class UpdatePostLinkDto extends UpdatePostCommonDto {
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
