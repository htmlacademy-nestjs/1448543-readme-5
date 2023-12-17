import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostQuoteEntity } from '../entity';

@Injectable()
export class PostQuoteRepository extends BaseMemoryRepository<PostQuoteEntity> {}
