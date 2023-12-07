import { Entity } from '@project/core';
import { AuthUser } from '@project/types';

export class UserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;

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
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
  }
}
