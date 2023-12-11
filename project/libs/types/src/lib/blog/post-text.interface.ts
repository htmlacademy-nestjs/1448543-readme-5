import { AbstractPost } from './abstract-post.interface';
import { PostType } from './post-type.enum';

export interface PostText extends AbstractPost {
  headline: string;
  preview: string;
  text: string;
}
