import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/core';
import { PostPhotoEntity } from '../entity';

@Injectable()
export class PostPhotoRepository extends BaseMemoryRepository<PostPhotoEntity> {}
