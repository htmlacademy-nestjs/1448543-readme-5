import { PostVideo } from '@project/types';
import { PostEntity } from './post.entity';

export class PostVideoEntity extends PostEntity implements PostVideo {
  public headline: string;
  public link: string;

  constructor(data: PostVideo) {
    super(data);
    this.populate(data);
  }

  public toPOJO() {
    return {
      ...this.getPlainObject(),
      headline: this.headline,
      link: this.link,
    };
  }

  public populate(data: PostVideo) {
    this.headline = data.headline;
    this.link = data.link;
  }
}
