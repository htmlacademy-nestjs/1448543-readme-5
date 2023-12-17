import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostLinkEntity } from '../entity';

@Injectable()
export class PostLinkRepository extends BaseMemoryRepository<PostLinkEntity> {}
