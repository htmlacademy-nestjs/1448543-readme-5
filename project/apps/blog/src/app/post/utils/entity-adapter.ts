import { PostType } from '@project/types';
import { PostTextEntity, PostVideoEntity } from '../entity';

export const TypeEntityAdapter = {
  [PostType.Text]: PostTextEntity,
  [PostType.Video]: PostVideoEntity,
};
