import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostCommonDto } from './update-post-common.dto';

export class UpdatePostPhotoDto extends UpdatePostCommonDto {
  @ApiProperty({
    description: 'Photo',
    example: 'pictures/pic-1.png',
  })
  public photo: string;
}
