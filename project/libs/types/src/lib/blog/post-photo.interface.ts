import { AbstractPost } from './abstract-post.interface';
import { PostType } from './post-type.enum';

export interface PostPhoto extends AbstractPost {
  type: PostType.Photo;
  photo: string;
}
