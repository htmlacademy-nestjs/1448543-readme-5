import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostCommonEntity } from './entity/post-common.entity';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostCommonEntity> {}
