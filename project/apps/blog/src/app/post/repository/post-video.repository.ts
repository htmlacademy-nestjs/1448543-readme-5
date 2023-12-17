import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostVideoEntity } from '../entity';

@Injectable()
export class PostVideoRepository extends BaseMemoryRepository<PostVideoEntity> {}
