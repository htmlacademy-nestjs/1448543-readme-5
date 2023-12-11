import { PostType } from '@project/types';
import { PostTextEntity } from '../entity/post-text.entity';

export const TypeEntityAdapter = {
  [PostType.Text]: PostTextEntity,
};
