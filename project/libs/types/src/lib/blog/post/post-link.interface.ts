import { AbstractPost } from './abstract-post.interface';
import { PostType } from './post-type.enum';

export interface PostLink extends AbstractPost {
  link: string;
  description: string;
}
