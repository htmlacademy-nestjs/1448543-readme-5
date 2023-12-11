import { AbstractPost } from './abstract-post.interface';
import { PostType } from './post-type.enum';

export interface PostVideo extends AbstractPost {
  type: PostType.Video;
  headline: string;
  link: string;
}
