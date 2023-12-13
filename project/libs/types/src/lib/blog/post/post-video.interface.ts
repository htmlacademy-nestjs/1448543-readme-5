import { AbstractPost } from './abstract-post.interface';
export interface PostVideo extends AbstractPost {
  headline: string;
  link: string;
}
