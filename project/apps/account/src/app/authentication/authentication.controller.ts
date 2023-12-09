import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillDto } from '@project/helpers';
import { UserRdo } from './rdo/user.rdo';
import { LoginUserDto } from './dto/login-user-dto';
import { LoggedUserRdo } from './rdo/logged-user.rdo';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authenticationService.register(dto);
    return fillDto(UserRdo, newUser.toPOJO());
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authenticationService.verifyUser(dto);
    return fillDto(LoggedUserRdo, verifiedUser);
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authenticationService.getUser(id);
    return fillDto(UserRdo, existUser.toPOJO());
  }
}
