import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { UserRepository } from '../user/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import {
  AUTH_USER_EXISTS,
  AUTH_USER_NOT_FOUND,
  AUTH_USER_PASSWORD_WRONG,
} from './authentication.constants';
import { UserEntity } from '../user/user.entity';
import { LoginUserDto } from './dto/login-user-dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly userRepository: UserRepository) {}

  public async register(dto: CreateUserDto) {
    const { email, password, firstname, lastname, avatar } = dto;

    const user = {
      email,
      firstname,
      lastname,
      avatar,
      passwordHash: '',
    };

    const existUser = await this.userRepository.findByEmail(email);
    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(user).setPassword(password);

    return this.userRepository.save(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const { email, password } = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!(await existUser.comparePassword(password))) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser.toPOJO();
  }

  public async getUser(id: string) {
    return this.userRepository.findById(id);
  }

  public async updatePassword(dto: UpdatePasswordDto) {
    const { id, currentPassword, newPassword } = dto;

    const existUser = await this.userRepository.findById(id);
    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!(await existUser.comparePassword(currentPassword))) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    const userEntity = await existUser.setPassword(newPassword);

    return this.userRepository.save(userEntity);
  }
}
