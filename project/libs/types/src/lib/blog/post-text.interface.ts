import { AbstractPost } from './abstract-post.interface';

export interface PostText extends AbstractPost {
  headline: string;
  preview: string;
  text: string;
}
