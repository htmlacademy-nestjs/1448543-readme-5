import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostTextEntity } from '../entity';

@Injectable()
export class PostTextRepository extends BaseMemoryRepository<PostTextEntity> {}
