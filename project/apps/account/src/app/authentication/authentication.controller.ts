import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillDto } from '@project/helpers';
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user-dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.',
  })
  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authenticationService.register(dto);
    return fillDto(UserRdo, newUser.toPOJO());
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged',
  })
  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authenticationService.verifyUser(dto);
    return fillDto(LoggedUserRdo, verifiedUser);
  }

  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User password updated',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Current password is wrong',
  })
  @Post('/update-password')
  public async updatePassword(@Body() dto: UpdatePasswordDto) {
    const existUser = await this.authenticationService.updatePassword(dto);
    return fillDto(LoggedUserRdo, existUser.toPOJO());
  }

  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found',
  })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authenticationService.getUser(id);
    return fillDto(UserRdo, existUser.toPOJO());
  }
}
