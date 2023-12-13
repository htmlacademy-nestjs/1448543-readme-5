import { CreatePostTextDto } from './create-post-text.dto';
import { CreatePostVideoDto } from './create-post-video.dto';
import { CreatePostPhotoDto } from './create-post-photo.dto';
import { CreatePostQuoteDto } from './create-post-quote.dto';
import { CreatePostLinkDto } from './create-post-link.dto';

export type CreatePostCommonDto =
  | CreatePostTextDto
  | CreatePostVideoDto
  | CreatePostPhotoDto
  | CreatePostQuoteDto
  | CreatePostLinkDto;
