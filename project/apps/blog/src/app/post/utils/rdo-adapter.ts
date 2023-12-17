import { fillDto } from '@project/helpers';
import { PostType } from '@project/types';
import { PostTextRdo, PostVideoRdo } from '../rdo';
import { PostContentEntity } from '../entity';

export function getPostRdo(post: PostContentEntity, type: PostType) {
  switch (type) {
    case PostType.Text:
      return fillDto(PostTextRdo, post.toPOJO());
    case PostType.Video:
      return fillDto(PostVideoRdo, post.toPOJO());
  }
}
