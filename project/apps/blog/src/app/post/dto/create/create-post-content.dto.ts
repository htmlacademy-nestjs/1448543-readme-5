import { CreatePostTextDto } from './create-post-text.dto';
import { CreatePostVideoDto } from './create-post-video.dto';
import { CreatePostPhotoDto } from './create-post-photo.dto';
import { CreatePostQuoteDto } from './create-post-quote.dto';
import { CreatePostLinkDto } from './create-post-link.dto';
import { CreatePostCommonDto } from './create-post-common.dto';

export type CreatePostContentDto =
  | CreatePostTextDto
  | CreatePostVideoDto
  | CreatePostPhotoDto
  | CreatePostQuoteDto
  | CreatePostLinkDto;

export type CreatePostDto = CreatePostContentDto & CreatePostCommonDto;
