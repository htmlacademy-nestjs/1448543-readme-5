import { compare, genSalt, hash } from 'bcrypt';
import { Entity } from '@project/core';
import { AuthUser } from '@project/types';
import { SALT_ROUNDS } from './user.constants';

export class UserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public registrationDate: Date;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      passwordHash: this.passwordHash,
      registrationDate: this.registrationDate,
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.registrationDate = data.registrationDate;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
