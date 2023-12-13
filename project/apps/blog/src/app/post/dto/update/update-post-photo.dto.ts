import { ApiProperty } from '@nestjs/swagger';
import { UpdatePostDto } from './update-post.dto';

export class UpdatePostPhotoDto extends UpdatePostDto {
  @ApiProperty({
    description: 'Photo',
    example: 'pictures/pic-1.png',
  })
  public photo?: string;
}
