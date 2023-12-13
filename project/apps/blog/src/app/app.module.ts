import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [PostModule, LikeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
