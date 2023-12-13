import { fillDto } from '@project/helpers';
import { PostType } from '@project/types';
import { PostTextRdo, PostVideoRdo } from '../rdo';
import { PostCommonEntity } from '../entity';

export function getPostRdo(post: PostCommonEntity) {
  switch (post.type) {
    case PostType.Text:
      return fillDto(PostTextRdo, post.toPOJO());
    case PostType.Video:
      return fillDto(PostVideoRdo, post.toPOJO());
  }
}
