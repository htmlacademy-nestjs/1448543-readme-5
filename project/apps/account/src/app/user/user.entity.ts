import { compare, genSalt, hash } from 'bcrypt';
import { Entity } from '@project/core';
import { AuthUser } from '@project/types';
import { SALT_ROUNDS } from './user.constants';

export class UserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public name: string;
  public passwordHash: string;
  public avatar?: string;
  public createdAt?: Date;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
      createdAt: this.createdAt,
    };
  }

  public populate(data: AuthUser): void {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.passwordHash = data.passwordHash;
    this.avatar = data.avatar;
    this.createdAt = data.createdAt;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: AuthUser): UserEntity {
    return new UserEntity(data);
  }
}
