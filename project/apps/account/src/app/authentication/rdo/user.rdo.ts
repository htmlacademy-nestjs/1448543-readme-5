import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'Unique user ID',
    example: '001',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User registration date',
    example: '1970-01-01T00:00:00.000Z',
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'Unique user email',
    example: 'user@example.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Firstname Lastname',
  })
  @Expose()
  public name: string;
}
