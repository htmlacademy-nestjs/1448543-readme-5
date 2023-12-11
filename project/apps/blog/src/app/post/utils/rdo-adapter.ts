import { fillDto } from '@project/helpers';
import { PostType } from '@project/types';
import { PostTextRdo } from '../rdo/post-text.rdo';
import { PostCommonEntity } from '../entity/post-common.entity';

export function getPostRdo(post: PostCommonEntity) {
  switch (post.type) {
    case PostType.Text:
      return fillDto(PostTextRdo, post.toPOJO());
  }
}
