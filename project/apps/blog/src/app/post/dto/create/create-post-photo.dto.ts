import { ApiProperty } from '@nestjs/swagger';
import { CreatePostCommonDto } from './create-post-common.dto';

export class CreatePostPhotoDto extends CreatePostCommonDto {
  @ApiProperty({
    description: 'Photo',
    example: 'pictures/pic-1.png',
  })
  public photo: string;
}
