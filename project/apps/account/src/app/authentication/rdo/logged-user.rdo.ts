import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'Unique user ID',
    example: '001',
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@example.com',
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'qwerty1234',
  })
  @Expose()
  public accessToken: string;
}
