import { PostLink } from '@project/types';
import { PostEntity } from './post.entity';

export class PostLinkEntity extends PostEntity implements PostLink {
  public link: string;
  public description: string;

  constructor(data: PostLink) {
    super(data);
    this.populate(data);
  }

  public toPOJO() {
    return {
      ...this.getPlainObject(),
      description: this.description,
      link: this.link,
    };
  }

  public populate(data: PostLink) {
    this.description = data.description;
    this.link = data.link;
  }
}
