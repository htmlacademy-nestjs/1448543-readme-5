import { Expose } from 'class-transformer';
import { PostRdo } from './post.rdo';
import { ApiProperty } from '@nestjs/swagger';

export class PostPhotoRdo extends PostRdo {
  @ApiProperty({
    description: 'Post photo',
    example: '/pictures/picture-1.png',
  })
  @Expose()
  public photo: string;
}
