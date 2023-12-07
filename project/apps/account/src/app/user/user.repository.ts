import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {}
