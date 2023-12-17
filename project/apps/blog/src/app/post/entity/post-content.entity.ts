import { PostTextEntity } from './post-text.entity';
import { PostVideoEntity } from './post-video.entity';
import { PostPhotoEntity } from './post-photo.entity';
import { PostQuoteEntity } from './post-quote.entity';
import { PostLinkEntity } from './post-link.entity';

export type PostContentEntity =
  | PostTextEntity
  | PostVideoEntity
  | PostPhotoEntity
  | PostQuoteEntity
  | PostLinkEntity;
