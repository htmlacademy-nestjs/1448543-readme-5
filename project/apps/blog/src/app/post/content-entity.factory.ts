import {
  PostContent,
  PostText,
  PostType,
  PostVideo,
  PostQuote,
  PostLink,
  PostPhoto,
} from '@project/types';
import {
  PostTextEntity,
  PostVideoEntity,
  PostPhotoEntity,
  PostLinkEntity,
  PostQuoteEntity,
} from './entity';

export class ContentEntityFactory {
  public type: PostType;
  public content: PostContent;

  constructor(type: PostType, content: PostContent) {
    this.type = type;
    this.content = content;
  }

  getContent() {
    switch (this.type) {
      case PostType.Video:
        return new PostVideoEntity(this.content as PostVideo);
      case PostType.Text:
        return new PostTextEntity(this.content as PostText);
      case PostType.Link:
        return new PostLinkEntity(this.content as PostLink);
      case PostType.Photo:
        return new PostPhotoEntity(this.content as PostPhoto);
      case PostType.Quote:
        return new PostQuoteEntity(this.content as PostQuote);
      default:
        throw new Error('Not implements blog type');
    }
  }
}
