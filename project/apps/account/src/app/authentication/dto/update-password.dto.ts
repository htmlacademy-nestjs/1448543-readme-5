import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({
    description: 'User ID',
    example: '001',
  })
  public id: string;

  @ApiProperty({
    description: 'User current password',
    example: '12345',
  })
  public currentPassword: string;

  @ApiProperty({
    description: 'User new password',
    example: '54321',
  })
  public newPassword: string;
}
