import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email',
    example: 'user@example.com',
  })
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Firstname',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Lastname',
  })
  public lastname: string;

  @ApiProperty({
    description: 'User password',
    example: '12345',
  })
  public password: string;

  @ApiProperty({
    description: 'User avarar',
    example: '',
  })
  public avatar?: string;
}
