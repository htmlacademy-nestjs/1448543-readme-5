import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PostRdo {
  @ApiProperty({
    description: 'Unique post ID',
    example: '1',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Unique post ID for reposted post',
    example: '2',
  })
  @Expose()
  public originId: string;

  @ApiProperty({
    description: 'Unique user ID',
    example: '1',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Unique user ID for reposted posts',
    example: '2',
  })
  @Expose()
  public originUserId: string;

  @ApiProperty({
    description: 'Creation date',
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'Publication date',
  })
  @Expose()
  public publishedAt: Date;

  @ApiProperty({
    description: 'Post type',
    example: 'text',
  })
  @Expose()
  public type: string;

  @ApiProperty({
    description: 'Post status',
    example: 'published',
  })
  @Expose()
  public status: string;

  @ApiProperty({
    description: 'Post tags',
    example: ['cooking'],
  })
  @Expose()
  public tags: string[];
}
