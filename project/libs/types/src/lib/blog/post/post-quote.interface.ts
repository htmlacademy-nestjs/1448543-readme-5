import { AbstractPost } from './abstract-post.interface';
import { PostType } from './post-type.enum';

export interface PostQuote extends AbstractPost {
  text: string;
  author: string;
}
