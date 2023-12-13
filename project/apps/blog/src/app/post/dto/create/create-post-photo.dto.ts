import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class CreatePostPhotoDto extends CreatePostDto {
  @ApiProperty({
    description: 'Photo',
    example: 'pictures/pic-1.png',
  })
  public photo: string;
}
