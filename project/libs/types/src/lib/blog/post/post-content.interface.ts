import { PostText } from './post-text.interface';
import { PostVideo } from './post-video.interface';
import { PostPhoto } from './post-photo.interface';
import { PostLink } from './post-link.interface';
import { PostQuote } from './post-quote.interface';

export type PostContent =
  | PostText
  | PostVideo
  | PostPhoto
  | PostLink
  | PostQuote;
