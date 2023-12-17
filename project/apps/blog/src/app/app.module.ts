import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [PostModule, LikeModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
