import { UpdatePostTextDto } from './update-post-text.dto';
import { UpdatePostVideoDto } from './update-post-video.dto';
import { UpdatePostPhotoDto } from './update-post-photo.dto';
import { UpdatePostQuoteDto } from './update-post-quote.dto';
import { UpdatePostLinkDto } from './update-post-link.dto';

export type UpdatePostCommonDto =
  | UpdatePostTextDto
  | UpdatePostVideoDto
  | UpdatePostPhotoDto
  | UpdatePostQuoteDto
  | UpdatePostLinkDto;
