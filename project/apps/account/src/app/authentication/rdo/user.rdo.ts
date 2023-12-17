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
  public registrationDate: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png',
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@example.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Firstname',
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Lastname',
  })
  @Expose()
  public lastname: string;
}
